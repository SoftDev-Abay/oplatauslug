import "./AdminPanel.css"; // Importing the CSS file

const AdminPanel = () => {
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

      <div className="three-buttons">
        <div className="firstbutton">
          <img
            src="img/4943215.png"
            alt=""
            style={{ width: "20%", margin: "0 0 0 24%" }}
          />
          <h3
            style={{
              fontWeight: "600",
              fontSize: "16px",
              fontFamily: "Montserrat",
              lineHeight: "0",
              margin: "4% 0 0 16%",
            }}
          >
            Система оплаты
          </h3>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "10px",
              color: "#929292",
              margin: "4% 0 0 0",
            }}
          >
            Нажмите чтобы включить/выключить систему оплаты
          </p>
        </div>
        <div className="secondbutton">
          <img
            src="img/3541892.png"
            alt=""
            style={{ width: "15%", margin: "0 0 0 39%" }}
          />
          <h3
            style={{
              fontWeight: "600",
              fontSize: "16px",
              fontFamily: "Montserrat",
              lineHeight: "0",
              margin: "3% 0 0 40%",
            }}
          >
            Модель
          </h3>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "10px",
              color: "#929292",
              margin: "4% 0 0 18%",
            }}
          >
            Нажмите чтобы включить/выключить систему оплаты
          </p>
        </div>
        <div className="threebutton">
          <img
            src="img/4943215.png"
            alt=""
            style={{ width: "19%", margin: "0 0 0 52%" }}
          />
          <h3
            style={{
              fontWeight: "600",
              fontSize: "16px",
              fontFamily: "Montserrat",
              lineHeight: "0",
              margin: "3% 0 0 42%",
            }}
          >
            Тестовый период
          </h3>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "10px",
              color: "#929292",
              margin: "4% 0 0 30%",
            }}
          >
            Нажмите чтобы включить/выключить систему оплаты
          </p>
        </div>
      </div>
      <div className="generation">
        <button
          className="qrGen"
          style={{
            border: "1px double #4c73eb",
            borderRadius: "7px",
            backgroundColor: "#4c73eb",
            width: "67%",
            fontSize: "18px",
            padding: "0.8%",
            fontFamily: "Montserrat",
            fontWeight: "400",
            color: "#fff",
            height: "59%",
          }}
        >
          Сгенерировать QR
        </button>

        <button
          className="sumGen"
          style={{
            border: "1px double #4c73eb",
            borderRadius: "7px",
            backgroundColor: "#4c73eb",
            width: "67%",
            fontSize: "18px",
            padding: "0.8%",
            fontFamily: "Montserrat",
            fontWeight: "400",
            color: "#fff",
            height: "59%",
          }}
        >
          Изменить сумму
        </button>
      </div>
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
        <div className="poisk">
          <img
            src="img/27229.svg"
            alt=""
            style={{ width: "10%", height: "40%", marginTop: "2%" }}
          />
          <div className="vse">
            <h1
              style={{
                fontSize: "14px",
                fontFamily: "system-ui",
                fontWeight: "400",
                lineHeight: "0",
                paddingTop: "13%",
              }}
            >
              Все
            </h1>
            <h1
              style={{
                fontSize: "17px",
                fontWeight: "800",
                marginTop: "15%",
                lineHeight: "0.1",
              }}
            >
              &#709;
            </h1>
          </div>
          <div className="search">
            <img
              src="img/search_104498.png"
              alt=""
              style={{ width: "6%", height: "54%", marginTop: "2%" }}
            />
            <form>
              <input type="text" placeholder="Искать здесь..." />
              <button type="submit"></button>
            </form>
          </div>

          <div className="calendar">
            <input
              type="date"
              className="input w-input"
              name="Date"
              id="davaToday"
              style={{ width: "8em", padding: "0" }}
            />
          </div>
          <script src="js/jquery-3.4.1.min.js" type="text/javascript"></script>
          <script src="js/script.js" type="text/javascript"></script>

          <script>
            document.getElementById('davaToday').valueAsDate = new Date();
          </script>
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
    </div>
  );
};

export default AdminPanel;
