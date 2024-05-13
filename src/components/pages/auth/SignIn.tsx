import React from "react";

function SignIn() {
  return (
    <div>
      <div className="container">
        <img src="/img/Group 476.png" alt="" width="40%" height="658px" />
        <div className="parent">
          <div className="i-monitor">
            <div className="o-monitor">
              <h2
                style={{
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  fontFamily: "Inter",
                  color: "#4c73eb",
                }}
              >
                Вход
              </h2>
            </div>
            <form action="#" style={{ marginTop: "-4%" }}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Логин"
                  style={{
                    fontSize: "14px",
                    fontFamily: "system-ui",
                    color: "#121e6c",
                  }}
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Пароль"
                  style={{
                    fontSize: "14px",
                    fontFamily: "system-ui",
                    color: "#121e6c",
                  }}
                />
              </div>
            </form>

            <div className="checkmark">
              <div className="check">
                <input
                  type="checkbox"
                  checked
                  style={{ width: "20px", height: "20px" }}
                />
                <h3
                  style={{
                    fontFamily: "MONTSERRAT",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "0",
                  }}
                >
                  Запомнить меня
                </h3>
              </div>
            </div>
            <div className="s-monitor">
              <a
                className="no-underline-text"
                href="/admin-panel"
                style={{ width: "100%" }}
              >
                <button className="but1">Войти</button>
              </a>
            </div>
            <div className="registration">
              <h3
                style={{
                  fontFamily: "MONTSERRAT",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "0",
                  marginTop: "2%",
                }}
              >
                Нет аккаунта?
              </h3>
              <a
                href="#"
                style={{ fontFamily: "MONTSERRAT", fontSize: "14px" }}
              >
                Зарегистрироваться
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/img/Group 477.png"
        alt=""
        width="50%"
        style={{ margin: "-25% 0 0 50%" }}
      />
    </div>
  );
}

export default SignIn;
