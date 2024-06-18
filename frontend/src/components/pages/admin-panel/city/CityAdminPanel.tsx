// import { useParams } from "react-router-dom";
import ControlButtons from "../../../admin-panel/ControlButtons";
import GenerationButtons from "../../../admin-panel/GenerationButtons";
import TransactionHistory from "../../../admin-panel/TransactionHistory";
import { useGetPayConfigQuery } from "../../../../features/pay-config/payConfigApiSlice";
const CityAdminPanel = () => {
  // const { name } = useParams();
  const { data, error, isLoading } = useGetPayConfigQuery();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {"error occured"}</div>;

  console.log("data", data);

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
        }}
      >
        Административная панель для руководителя
      </h3>

      {/* three buttons */}
      <ControlButtons />
      <GenerationButtons />
      <TransactionHistory />
    </div>
  );
};

export default CityAdminPanel;
