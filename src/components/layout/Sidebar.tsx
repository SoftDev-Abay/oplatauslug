// import React from "react";
// import { IoChevronDown } from "react-icons/io5";
import "./Sidebar.css";
import LinksBox from "./LinksBox";
import { Link, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { useSendLogoutMutation } from "../../features/auth/authApiSlice";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useGetUsersQuery } from "../../features/users/usersApiSlice";
import CashiersLinks from "../CashiersLinks";

const links = {
  cities: {
    title: "Города",
    url: "/admin-panel/city",
    img: "/img/191219.png",
    nestedLinks: [
      {
        title: "Хива",
        url: "/admin-panel/city",
      },
      {
        title: "Самарканд",
        url: "/admin-panel/city",
      },
      {
        title: "Бухара",
        url: "/admin-panel/city",
      },
    ],
  },
  cashiers: {
    title: "Кассиры",
    url: "/admin-panel/cashier",
    img: "/img/person_icon_159921.png",

    nestedLinks: [
      {
        title: "Кассир 1",
        url: "/admin-panel/cashier",
      },
      {
        title: "Кассир 2",
        url: "/admin-panel/cashier",
      },
      {
        title: "Кассир 3",
        url: "/admin-panel/cashier",
      },
    ],
  },
  temp: {
    title: "Оплата",
    url: "/pay",
    img: "/img/credit-card.png",
  },
};

const Sidebar = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/login");
  }, [isSuccess, navigate]);

  const logoutButton = (
    <div onClick={sendLogout} className="link">
      <img src="/img/1286853.png" alt="" />
      <p>Выйти</p>
    </div>
  );

  const errClass = isError ? "errmsg" : "offscreen";

  let buttonContent;
  if (isLoading) {
    buttonContent = <PulseLoader color={"#FFF"} />;
  } else {
    buttonContent = <>{logoutButton}</>;
  }

  const content = (
    <div className="sidebar">
      <div className="link main-link">
        <img src="/img/unsplash_RmoWqDCqN2E.png" alt="" />
        <p>Admin</p>
      </div>
      <div className="links-container">
        {isAdmin && (
          <div className="links">
            <LinksBox
              title={links.cities.title}
              url={links.cities.url}
              nestedLinks={links.cities.nestedLinks}
              img={links.cities.img}
            />
            {isAdmin && <CashiersLinks />}
            <Link type="button" to={"/add-cashier"} className="link">
              Добавить
            </Link>
          </div>
        )}

        <p className={errClass}></p>
        {buttonContent}
      </div>
    </div>
  );

  return content;
};

export default Sidebar;
