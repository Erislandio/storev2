import React, { useState } from "react";
import { login as LOGIN } from "../../graphql/mutation/login";
import { useMutation } from "@apollo/react-hooks";
import cookie from "js-cookie";
import { useToasts } from "react-toast-notifications";
import "./login.css";

export const LoginAdmin = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [login, { loading }] = useMutation(LOGIN);
  const { addToast } = useToasts();
  const fields = Object.keys(user);

  const inputType = field => {
    switch (field) {
      case "email":
        return "email";
      case "password":
        return "password";
      default:
        return "text";
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    login({
      variables: {
        ...user
      }
    })
      .then(
        ({
          data: {
            signinUser: { user, token }
          }
        }) => {
          if (user && user.admin) {
            const userCookie = new Promise((resolve, reject) => {
              cookie.set("token", JSON.stringify({ ...user, token }));
              if (cookie.get("token")) {
                resolve();
              }
            });

            return userCookie.then(() => {
              window.location.href = "/admin";
            });
          } else {
            addToast("Seu usuário não possui acesso de ADMIN", {
              appearance: "error",
              autoDismiss: true
            });
          }
        }
      )
      .catch(error => {
        return addToast(
          "Ops! não foi possível acessar a aplicação, tente novamente.",
          {
            appearance: "warning",
            autoDismiss: true
          }
        );
      });
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div id="login-form" className="login">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => {
            return (
              <div key={index} className="input-container">
                <input
                  name={field}
                  type={inputType(field)}
                  placeholder={inputType(field)}
                  onChange={handleChange}
                  className="input"
                  value={user[field]}
                  required
                />
              </div>
            );
          })}
          <button disabled={loading} type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
