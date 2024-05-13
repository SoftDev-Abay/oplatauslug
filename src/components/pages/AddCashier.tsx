import "./AddCashier.css"; // Importing the CSS file

const AddCashier = () => {
  return (
    <div className="right-anketa">
      <div className="anketa">
        <h2>Добавить кассира</h2>
      </div>
      <form action="#" style={{ marginTop: "-6%" }}>
        <div className="inputep-box">
          <input type="text" placeholder="Полное имя" />
        </div>
        <div className="inputep-box">
          <input type="text" placeholder="Логин" />
        </div>
        <div className="inputep-box">
          <input
            type="email" // Changed type to email for better semantics
            placeholder="Email"
            className="form-control"
            name="email"
            defaultValue="" // Changed to defaultValue for uncontrolled component
          />
        </div>
        <div className="inputep-box">
          <input
            type="password"
            placeholder="Пароль"
            defaultValue="FakePSW" // Changed to defaultValue for uncontrolled component
            id="myInput"
            style={{
              margin: "0 0 2px 0",
            }}
          />
        </div>
        <div className="eyes">
          <div className="inpute-box">
            <input type="checkbox" />
            <p
              style={{
                lineHeight: "0",
                width: "100%",
                fontSize: "14px",
                margin: "5% 0 0 0",
              }}
            >
              Показать пароль
            </p>
          </div>
        </div>
        <div className="inputep-box">
          <input
            type="password"
            placeholder="Пароль"
            defaultValue="FakePSW" // Changed to defaultValue for uncontrolled component
            style={{
              margin: "0 0 2px 0",
            }}
          />
        </div>
        <div className="eyes">
          <div className="inpute-box">
            <input type="checkbox" />
            <p
              style={{
                margin: "5% 0 0 0",
              }}
            >
              Показать пароль
            </p>
          </div>
        </div>
      </form>

      <h3
        className="h3"
        style={{
          fontSize: "11px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "0",
          fontFamily: "Montserrat",
          margin: "7% 0 0 0",
        }}
      >
        Phone Number
      </h3>
      <div className="number">
        <div className="countries">
          <img
            src="img/330674.png" // Changed to correct forward slashes
            alt=""
            width="40%"
            height="89%"
            style={{ marginTop: "2%" }}
          />
          <select>
            <option>+998</option>
            <option>+568</option>
            <option>+256</option>
          </select>
        </div>
        <form action="#" style={{ marginTop: "-20px", width: "67%" }}>
          <div className="inputerr-box">
            <input type="text" placeholder="8023456789" />
          </div>
        </form>
      </div>

      <h3
        style={{
          fontSize: "11px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "0",
          fontFamily: "Montserrat",
        }}
      >
        Account Type
      </h3>
      <div className="Account">
        <div className="select">
          <h1
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              fontWeight: "400",
              color: "gray",
            }}
          >
            Select
          </h1>
          <h1
            style={{
              fontSize: "17px",
              fontWeight: "600",
              marginTop: "3%",
              color: "gray",
            }}
          >
            &#709;
          </h1>
        </div>
      </div>
      <button
        style={{
          border: "1px double #4c73eb",
          borderRadius: "7px",
          backgroundColor: "#4c73eb",
          width: "98%",
          fontSize: "19px",
          padding: "2%",
          fontFamily: "Montserrat",
          fontWeight: "400",
          margin: "0",
          color: "#fff",
        }}
      >
        Войти
      </button>
    </div>
  );
};

export default AddCashier;
