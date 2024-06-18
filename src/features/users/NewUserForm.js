import { useState, useEffect } from "react";
import { useAddNewUserMutation } from "./usersApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import useTitle from "../../hooks/useTitle";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const cityOptions = ["Khiva", "Bukhara", "Samarkand"];

const NewUserForm = () => {
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
      setUsername("");
      setPassword("");
      setCity("");
      setFullName("");
      setConfirmPassword("");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onCityChanged = (e) => setCity(e.target.value);
  const onFullNameChanged = (e) => setFullName(e.target.value);
  const onConfirmPasswordChanged = (e) => setConfirmPassword(e.target.value);

  const canSave =
    [validUsername, validPassword, validConfirmPassword].every(Boolean) &&
    !isLoading;

  const onSaveUserClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewUser({ username, password, city, full_name: fullName });
    }
  };

  const errClass = isError ? "errmsg" : "offscreen";
  const validUserClass = !validUsername ? "form__input--incomplete" : "";
  const validPwdClass = !validPassword ? "form__input--incomplete" : "";

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <form className="form" onSubmit={onSaveUserClicked}>
        <div className="form__title-row">
          <h2>New User</h2>
          <div className="form__action-buttons">
            <button className="icon-button" title="Save" disabled={!canSave}>
              <FontAwesomeIcon icon={faSave} />
            </button>
          </div>
        </div>
        <label className="form__label" htmlFor="username">
          Username: <span className="nowrap">[3-20 letters]</span>
        </label>
        <input
          className={`form__input ${validUserClass}`}
          id="username"
          name="username"
          type="text"
          autoComplete="off"
          value={username}
          onChange={onUsernameChanged}
        />

        <label className="form__label" htmlFor="password">
          Password: <span className="nowrap">[4-12 chars incl. !@#$%]</span>
        </label>
        <input
          className={`form__input ${validPwdClass}`}
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={onPasswordChanged}
        />
        <label className="form__label" htmlFor="password">
          Confirm password:{" "}
          <span className="nowrap">[4-12 chars incl. !@#$%]</span>
        </label>
        <input
          className={`form__input ${validPwdClass}`}
          id="confirm_password"
          name="confirm_password"
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordChanged}
        />
        <label className="form__label" htmlFor="fullname">
          Full name: <span className="nowrap">[40-120 chars]</span>
        </label>
        <input
          className={`form__input`}
          id="fullname"
          name="fullname"
          type="text"
          value={fullName}
          onChange={onFullNameChanged}
        />
        <label className="form__label" htmlFor="city">
          City: <span className="nowrap">[40-120 chars]</span>
        </label>
        <select
          className={`form__input`}
          id="city"
          name="city"
          type="text"
          value={city}
          onChange={onCityChanged}
        >
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </form>
    </>
  );

  return content;
};
export default NewUserForm;
