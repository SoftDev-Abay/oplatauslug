function TransactionHistory() {
  return (
    <>
      <h2
        style={{
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          fontFamily: "Roboto",
          color: "rgb(6, 6, 114)",
        }}
      >
        История оплаты
      </h2>
      <div className="transactions">
        <div className="transaction">
          <h2
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              fontFamily: "Roboto",
              color: "#4c73eb",
            }}
          >
            Все транзакции
          </h2>
        </div>

        {/* filter by date range    */}

        <div
          className="filter"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "10px",
          }}
        >
          <input
            style={{
              width: "50%",
              borderRadius: "5px",
              border: "1px solid #4c73eb",
              paddingLeft: "10px",
            }}
            type="date"
            id="start"
            name="trip-start"
          />
          <input
            style={{
              width: "50%",
              borderRadius: "5px",
              border: "1px solid #4c73eb",
              paddingLeft: "10px",
            }}
            type="date"
            id="end"
            name="trip-end"
          />
        </div>
      </div>
      <div className="july-parent">
        <div className="july-m">
          <div className="Descrip">
            <h3
              style={{
                fontSize: "15px",
                fontFamily: "Roboto",
                fontWeight: "400",
                lineHeight: "0",
                color: "#4c73eb",
              }}
            >
              Описание
            </h3>
          </div>
          <div className="ID1">
            <h3
              style={{
                fontSize: "15px",
                fontFamily: "Roboto",
                fontWeight: "400",
                lineHeight: "0",
                color: "#5c77ca",
              }}
            >
              ID
            </h3>
          </div>
          <div className="card1">
            <h3
              style={{
                fontSize: "15px",
                fontFamily: "Roboto",
                fontWeight: "400",
                lineHeight: "0",
                color: "#5c77ca",
              }}
            >
              Номер карты
            </h3>
          </div>
          <div className="date1">
            <h3
              style={{
                fontSize: "15px",
                fontFamily: "Roboto",
                fontWeight: "400",
                lineHeight: "0",
                color: "#5c77ca",
              }}
            >
              Дата и время
            </h3>
          </div>
          <div className="sum1">
            <h3
              style={{
                fontSize: "15px",
                fontFamily: "Roboto",
                fontWeight: "400",
                lineHeight: "0",
                color: "#5c77ca",
              }}
            >
              Сумма
            </h3>
          </div>
          <div className="che1">
            <h3
              style={{
                fontSize: "15px",
                fontFamily: "Roboto",
                fontWeight: "400",
                lineHeight: "0",
                color: "#5c77ca",
              }}
            >
              Чек
            </h3>
          </div>
        </div>
        <div className="prokrutka">
          <div className="july-monitor">
            <div className="Description">
              <h3
                style={{
                  fontSize: "16px",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  lineHeight: "0",
                }}
              >
                Покупка билета
              </h3>
            </div>
            <div className="ID">
              <h3
                style={{
                  fontSize: "16px",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  lineHeight: "0",
                }}
              >
                #000001
              </h3>
            </div>
            <div className="card">
              <h3
                style={{
                  fontSize: "16px",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  lineHeight: "0",
                }}
              >
                ****1234
              </h3>
            </div>
            <div className="date">
              <h3
                style={{
                  fontSize: "16px",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  lineHeight: "0",
                }}
              >
                28 апр, 18:30
              </h3>
            </div>
            <div className="sum">
              <h3
                style={{
                  fontSize: "16px",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  lineHeight: "0",
                }}
              >
                +$230
              </h3>
            </div>
            <div className="checks">
              <h3
                style={{
                  fontSize: "16px",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  lineHeight: "0",
                  color: "#2750a9",
                }}
              >
                Загрузить
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="item-list">
        <ul className="pager">
          <li className="pager-next last">
            <a href="/node?page=1" title="На следующую страницу">
              &gt;
            </a>
          </li>
          <li className="pager-item">
            <a href="/node?page=3" title="На страницу номер 4">
              Пред.
            </a>
          </li>
          <li className="pager-current first">
            <span style={{ marginTop: "17%" }}>1</span>
          </li>
          <li className="pager-item">
            <a href="/node?page=1" title="На страницу номер 2">
              2
            </a>
          </li>
          <li className="pager-item">
            <a href="/node?page=2" title="На страницу номер 3">
              3
            </a>
          </li>
          <li className="pager-item">
            <a href="/node?page=3" title="На страницу номер 4">
              4
            </a>
          </li>
          <li className="pager-item">
            <a href="/node?page=3" title="На страницу номер 4">
              След.
            </a>
          </li>
          <li className="pager-next last">
            <a href="/node?page=1" title="На следующую страницу">
              &lt;
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TransactionHistory;
