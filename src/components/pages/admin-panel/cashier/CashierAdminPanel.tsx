import { useParams } from "react-router-dom";
import TransactionHistory from "../../../admin-panel/TransactionHistory";

const CashierAdminPanel = () => {
  // get the cashier id from the url
  const { id } = useParams();
  console.log(id);
  return (
    <div className="right-part2">
      <h1
        style={{
          fontSize: "27px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          fontFamily: "Roboto",
          color: "rgb(6, 6, 114)",
        }}
      >
        Добро пожаловать!
      </h1>
      <h3
        style={{
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "0",
          fontFamily: "Montserrat",
          color: "rgb(6, 6, 114)",
          marginBottom: "66px",
        }}
      >
        Административная панель для руководителя
      </h3>

      {/* three buttons */}
      <TransactionHistory />
    </div>
  );
};

export default CashierAdminPanel;
