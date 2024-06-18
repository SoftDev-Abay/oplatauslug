const MyFormComponent = () => {
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
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            value=""
          />
        </div>
        <div className="inputep-box">
          <input
            type="password"
            placeholder="Пароль"
            id="myInput"
            value="FakePSW"
            style={{ margin: "0px 0px 2px" }}
          />
        </div>
        <div className="inputep-box">
          <input
            type="password"
            placeholder="Пароль"
            value="FakePSW"
            style={{ margin: "0px 0px 2px" }}
          />
        </div>
        <div className="eyes">
          <div className="inpute-box">
            <input type="checkbox" />
            <p
              style={{
                lineHeight: 0,
                width: "100%",
                fontSize: "14px",
                margin: "5% 0px 0px",
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
          lineHeight: 0,
          fontFamily: "Montserrat",
          margin: "7% 0px 0px",
        }}
      >
        Phone Number
      </h3>
      <div className="number">
        <div className="countries">
          <img
            src="img/330674.png"
            alt=""
            width="40%"
            height="89%"
            style={{ marginTop: "2%" }}
          />
          <select style={{ border: "none", outline: "none" }}>
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
      <button
        style={{
          border: "1px double rgb(76, 115, 235)",
          borderRadius: "7px",
          backgroundColor: "rgb(76, 115, 235)",
          width: "98%",
          fontSize: "19px",
          padding: "2%",
          fontFamily: "Montserrat",
          fontWeight: "400",
          margin: "0px",
          color: "rgb(255, 255, 255)",
        }}
      >
        Войти
      </button>
    </div>
  );
};

export default MyFormComponent;
