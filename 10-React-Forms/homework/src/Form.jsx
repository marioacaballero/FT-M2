import React from "react";

export function validate(input) { //escribo la funcion por fuera de Form para que pueda reutilizarla, si la escribo dentro tendria el mismo efecto. Ademas en el test lo pide fuera.
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}

export default function Form() {
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          className={errors.username && "danger"}
          type="text"
          name="username"
          onChange={handleInputChange}
          value={input.username}
        />
        <p className="danger">{errors.username}</p>
      </div>
      <div>
        <label>Password:</label>
        <input
          className={errors.password && "danger"}
          type="password"
          name="password"
          onChange={handleInputChange}
          value={input.password}
        />
        <p className="danger">{errors.password}</p>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
