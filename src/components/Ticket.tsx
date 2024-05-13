import React from "react";

function Ticket() {
  return (
    <div className="samar-ob">
      <div className="samar-parent2">
        <div className="samarqandar" style={{ padding: "37px 47px 0px 37px" }}>
          <h1>Samarqand</h1>
          <div className="mesto2">
            <p style={{ fontSize: "12px" }}>Место проведения:</p>
            <p style={{ fontSize: "12px", margin: "3.8% 0 0 2%" }}>
              Центр молодежи
            </p>
          </div>
          <div className="time2">
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
          <div className="com2">
            <p
              style={{
                fontSize: "13.5px",
                fontFamily: "Roboto",
                color: "#4c73eb",
                fontWeight: "700",
              }}
            >
              1 Входной билет
            </p>
            <p
              style={{
                fontSize: "13.5px",
                fontFamily: "Roboto",
                color: "#4c73eb",
                fontWeight: "700",
                lineHeight: "0",
              }}
            >
              50 USD
            </p>
          </div>
        </div>
      </div>
      <div className="samar-parent3">
        <div className="samarqand3" style={{ padding: "18px 47px 37px 47px" }}>
          <img
            src="/img/241528.png"
            alt=""
            style={{ width: "149px", height: "149px" }}
          />
          <button
            style={{
              border: "1px double #4c73eb",
              borderRadius: "7px",
              backgroundColor: "#4c73eb",
              width: "94%",
              fontSize: "15px",
              padding: "4% 0",
              fontFamily: "Inter",
              fontWeight: "300",
              margin: "6% 0 6% 2%",
              color: "#fff",
            }}
          >
            Скачать билет
          </button>
          <button
            style={{
              border: "1px double #d3d3d3",
              borderRadius: "7px",
              backgroundColor: "#ffffff",
              width: "94%",
              fontSize: "15px",
              padding: "4% 0",
              fontFamily: "Inter",
              fontWeight: "300",
              margin: "0 0 6% 2%",
              color: "#000000",
            }}
          >
            Скачать чек
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
