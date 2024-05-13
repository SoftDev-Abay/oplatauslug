import React from "react";
import { IoChevronDown } from "react-icons/io5";
import "./Sidebar.css";
import LinksBox from "./LinksBox";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const links = [
  {
    title: "Города",
    url: "/admin-panel",
    img: "/img/191219.png",
    nestedLinks: [
      {
        title: "Хива",
        url: "/admin-panel",
      },
      {
        title: "Самарканд",
        url: "/admin-panel",
      },
      {
        title: "Бухара",
        url: "/admin-panel",
      },
    ],
  },
  {
    title: "Кассиры",
    url: "/admin-panel",
    img: "/img/person_icon_159921.png",

    nestedLinks: [
      {
        title: "Кассир 1",
        url: "/admin-panel",
      },
      {
        title: "Кассир 2",
        url: "/admin-panel",
      },
      {
        title: "Кассир 3",
        url: "/admin-panel",
      },
    ],
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="link main-link">
        <img src="/img/unsplash_RmoWqDCqN2E.png" alt="" />
        <p>Admin</p>
      </div>
      <div className="links-container">
        <div className="links">
          {links.map((link) => (
            <LinksBox
              title={link.title}
              url={link.url}
              nestedLinks={link.nestedLinks}
              img={link.img}
            />
          ))}

          <Link type="button" to={"/add-cashier"} className="link">
            Добавить
          </Link>
        </div>
        <div className="link">
          <img src="/img/1286853.png" alt="" />
          <p>Выйти</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
