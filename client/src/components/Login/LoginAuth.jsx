import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAuth({ onSetIsLoggedIn, onSetUserId }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.success === true) {
            const token = result.token;
            // put the token in local storage
            localStorage.setItem("jsonwebtoken", token);
          }
        });
      const { success, token, userId } = await response.json();

      console.log(success);

      if (success === "true") {
        localStorage.setItem("token", token);
        onSetIsLoggedIn(true);
        onSetUserId(userId);
        navigate("/");
      }
    } catch {}
  };

  return (
    <div className="login-app">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Enter email"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter password"
        />
        <button
          href="http://localhost:8080/"
          variant="primary"
          className="mt-3"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginAuth;
