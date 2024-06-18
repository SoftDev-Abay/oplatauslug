import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../features/auth/authSlice";
import { useLoginMutation } from "../../../features/auth/authApiSlice";
import usePersist from "../../../hooks/usePersist";
import useTitle from "../../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";

const SignIn = () => {
  useTitle("Employee Login");

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (errRef.current) errRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username", username);

    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (err: any) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      if (errRef.current) errRef.current.focus();
    }
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleToggle = () => setPersist((prev: boolean) => !prev);

  const errClass = errMsg ? "errmsg" : "offscreen";

  if (isLoading) return <PulseLoader color={"#FFF"} />;

  const content = (
    <div>
      <div className="container" style={{ zIndex: "10000" }}>
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

            <p
              ref={errRef}
              className={errClass}
              aria-live="assertive"
              style={{ color: "black", fontSize: "14px" }}
            >
              {errMsg}
            </p>

            <form
              action="#"
              style={{ marginTop: "-4%" }}
              onSubmit={handleSubmit}
              id="myform"
            >
              <div className="input-box">
                <input
                  placeholder="Логин"
                  style={{
                    fontSize: "14px",
                    fontFamily: "system-ui",
                    color: "#121e6c",
                  }}
                  type="text"
                  id="username"
                  ref={userRef}
                  value={username}
                  onChange={handleUserInput}
                  autoComplete="off"
                  required
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
                  id="password"
                  onChange={handlePwdInput}
                  value={password}
                  required
                />
              </div>
            </form>

            <div className="checkmark">
              <div className="check">
                <input
                  type="checkbox"
                  style={{ width: "20px", height: "20px" }}
                  id="persist"
                  onChange={handleToggle}
                  checked={persist}
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
              <button
                className="but1"
                style={{ cursor: "pointer" }}
                type="submit"
                form="myform"
              >
                Войти
              </button>
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

  return content;
};
export default SignIn;
