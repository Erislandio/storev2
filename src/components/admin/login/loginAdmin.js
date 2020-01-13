import React, { useState } from "react";
import { login } from "../../graphql/mutation/login";

export const LoginAdmin = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  return (
    <div id="login-form">
      <div className="form-container" />
    </div>
  );
};
