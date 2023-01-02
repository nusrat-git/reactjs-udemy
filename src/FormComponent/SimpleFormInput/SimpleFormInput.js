import React, { useEffect, useState } from "react";
import "../Form.css";

const SimpleFormInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [touchedName, setTouchedName] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = name.trim() !== "";
  const enteredEmailIsValid = email.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && touchedName;

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const HandleFormData = (e) => {
    e.preventDefault();

    setTouchedName(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(name, email);
    setName("");
    setEmail("");
    setTouchedName(false);
  };

  const nameBlurHandler = (e) => {
    e.preventDefault();
    setTouchedName(true);
  };
  // const emailBlurHandler = (e) => {
  //   e.preventDefault();
  //   setTouchedName(true);
  // };

  // const nameChangeHandler = (e) => {
  //   setName(e.target.value);
  // };

  return (
    <div>
      <form>
        <div>
          <div className={nameInputClasses}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              onBlur={nameBlurHandler}
            />
          </div>
          {nameInputIsValid && (
            <div>
              <p className="error-text">Name is required!!</p>
            </div>
          )}
        </div>
        <div>
          <div className={nameInputClasses}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              onBlur={nameBlurHandler}
            />
          </div>
          {nameInputIsValid && (
            <div>
              <p className="error-text">Email is required!!</p>
            </div>
          )}
        </div>
        <div className="form-actions">
          <button onClick={HandleFormData} disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleFormInput;
