import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useAddNewUserMutation } from "../../features/users/usersApiSlice";
import useTitle from "../../hooks/useTitle";
import "./AddCashier.css";
const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;
const cityOptions = ["Khiva", "Bukhara", "Samarkand"];

const AddCashier = () => {
  useTitle("techNotes: New User");

  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [city, setCity] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setValidConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    if (isSuccess) {
      console.log("User added successfully");
      setUsername("");
      setPassword("");
      setCity("");
      setFullName("");
      setConfirmPassword("");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const onUsernameChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const onCityChanged = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCity(e.target.value);
  const onFullNameChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFullName(e.target.value);
  const onConfirmPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  const canSave =
    [validUsername, validPassword, validConfirmPassword].every(Boolean) &&
    !isLoading;

  const onSaveUserClicked = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (canSave) {
      await addNewUser({ username, password, city, full_name: fullName });
    }
  };

  const errClass = isError ? "errmsg" : "offscreen";
  const inputStyle = { margin: "0px 0px 2px" }; // Style used for password inputs in the second component

  return (
    <div className="right-anketa">
      <div className="anketa">
        <h2>Добавить кассира</h2>
      </div>
      {/* <p className={errClass}>{error?.data?.message}</p> */}
      <form onSubmit={onSaveUserClicked} style={{ marginTop: "-6%" }}>
        <div className="inputep-box">
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            onChange={onUsernameChanged}
            style={inputStyle}
          />
        </div>
        <div className="inputep-box">
          <input
            type="text"
            id="fullname"
            value={fullName}
            placeholder="Full Name"
            onChange={onFullNameChanged}
          />
        </div>

        <div className="inputep-box">
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={onPasswordChanged}
            style={inputStyle}
          />
        </div>

        <div className="inputep-box">
          <input
            type="password"
            id="confirm_password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={onConfirmPasswordChanged}
            style={inputStyle}
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

        <select
          className="inputep-box"
          id="city"
          value={city}
          onChange={onCityChanged}
        >
          {cityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          className="form-button"
          disabled={!canSave}
          style={{
            border: "1px double rgb(76, 115, 235)",
            borderRadius: "7px",
            backgroundColor: "rgb(76, 115, 235)",
            color: "rgb(255, 255, 255)",
            width: "98%",
            fontSize: "19px",
            padding: "2%",
            fontFamily: "Montserrat",
            fontWeight: "400",
            margin: "0px",
          }}
          type="submit"
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddCashier;
