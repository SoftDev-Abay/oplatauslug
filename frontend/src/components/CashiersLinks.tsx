import { useGetUsersQuery } from "../features/users/usersApiSlice";
import { PulseLoader } from "react-spinners";
import LinksBox from "./layout/LinksBox";

function CashiersLinks() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    // error,
  } = useGetUsersQuery("usersList");

  let content;

  if (isLoading) content = <PulseLoader color={"#FFF"} />;

  if (isError) {
    content = <p className="errmsg">{"error?.data?.message"}</p>;
  }

  if (isSuccess) {
    const nestedLinks = Object.values(users.entities)
      .filter((user: any) => user.roles.includes("Employee"))
      .map((user: any) => ({
        title: user.username,
        url: `/admin-panel/cashier/${user.id}`,
      }));

    content = (
      <LinksBox
        title="Кассиры"
        url="/admin-panel/cashier"
        img="/img/person_icon_159921.png"
        nestedLinks={nestedLinks}
      />
    );
  }

  return content;
}

export default CashiersLinks;

// this is what users are when consoled out
// {
//     "ids": [
//         "6644e1dfda9d2a60b1604699",
//         "66459460eab468f1b950b7e3",
//     ],
//     "entities": {
//         "6644e1dfda9d2a60b1604699": {
//             "_id": "6644e1dfda9d2a60b1604699",
//             "username": "abay",
//             "roles": [
//                 "Employee",
//                 "Manager",
//                 "Admin"
//             ],
//             "active": true,
//             "id": "6644e1dfda9d2a60b1604699"
//         },
//         "66459460eab468f1b950b7e3": {
//             "_id": "66459460eab468f1b950b7e3",
//             "username": "cashier",
//             "roles": [
//                 "Employee"
//             ],
//             "active": true,
//             "id": "66459460eab468f1b950b7e3"
//         },
//     }
// }
