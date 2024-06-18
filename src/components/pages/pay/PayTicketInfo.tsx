import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PayTicketInfo() {
  const [ticketCount, setTicketCount] = useState(1);
  const navigate = useNavigate();

  const staticTicketPrice = 100;

  const goToPrepayment = () => {
    const payAmount = staticTicketPrice * ticketCount;
    navigate("/pay/prepayment", { state: { payAmount } });
  };

  return (
    <div className="right-part2">
      <h1
        style={{
          fontSize: "26px",
          color: "rgb(58, 64, 107)",
          fontFamily: "Inter",
        }}
      >
        Форма для оплаты
      </h1>
      <div className="samar-parent">
        <div className="samarqand">
          <div className="prov">
            <h1>Samarqand</h1>
            <p style={{ fontSize: "12px" }}>Место проведения</p>
            <div className="time">
              <p style={{ fontSize: "12px" }}>23.04.2024</p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "1000",
                  margin: "3px 2%",
                }}
              >
                .
              </p>
              <p style={{ fontSize: "12px" }}>14:00</p>
            </div>
          </div>
          <div className="quantity">
            <p style={{ fontSize: "13px", fontFamily: "Roboto" }}>
              Количество билетов
            </p>
          </div>
          <div className="Howmany">
            <div className="plus">
              <button
                className="decrease"
                type="button"
                style={{
                  backgroundColor: "#4c73eb",
                  width: "77px",
                  fontSize: "22px",
                  color: "#fff",
                  fontWeight: "500",
                }}
                onClick={() => setTicketCount(ticketCount - 1)}
              >
                -
              </button>
              <input
                type="text"
                name="field"
                value={ticketCount}
                style={{ paddingLeft: "7px" }}
              />
              <button
                className="increase"
                type="button"
                style={{
                  backgroundColor: "#4c73eb",
                  width: "77px",
                  fontSize: "20px",
                  color: "#fff",
                }}
                onClick={() => setTicketCount(ticketCount + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="summ">
            <form action="#">
              <h3
                style={{
                  fontSize: "9px",
                  fontWeight: "400",
                  margin: "2% 0 0 5%",
                  fontFamily: "Inter",
                }}
              >
                Сумма
              </h3>
              <input
                type="text"
                placeholder="Введите сумму"
                style={{
                  fontSize: "13px",
                  fontFamily: "Inter",
                  color: "#121e6c",
                  fontWeight: "300",
                }}
              />
            </form>
          </div>
          <div className="sales">
            <div className="sal">
              <p
                style={{
                  fontSize: "13.5px",
                  fontFamily: "Inter",
                  color: "gray",
                }}
              >
                Скидка
              </p>
              <p
                style={{
                  fontSize: "13.5px",
                  fontFamily: "Inter",
                  color: "rgb(0, 0, 0)",
                }}
              >
                --
              </p>
            </div>
            <div className="com">
              <p
                style={{
                  fontSize: "13.5px",
                  fontFamily: "Inter",
                  color: "gray",
                }}
              >
                Комиссия
              </p>
              <p
                style={{
                  fontSize: "13.5px",
                  fontFamily: "Roboto",
                  color: "rgb(0, 0, 0)",
                  fontWeight: "700",
                }}
              >
                0,00 USD
              </p>
            </div>
          </div>
          <a className="no-underline-text" style={{ width: "100%" }}>
            <button
              style={{
                border: "1px double #4c73eb",
                borderRadius: "7px",
                backgroundColor: "#4c73eb",
                width: "98%",
                fontSize: "15px",
                padding: "3%",
                fontFamily: "Montserrat",
                fontWeight: "400",
                margin: "6% 0",
                color: "#fff",
              }}
              onClick={goToPrepayment}
            >
              Купить
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PayTicketInfo;
