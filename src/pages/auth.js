import React from "react";
import { useNavigate } from "react-router-dom";
const Auth = ({ authenticate }) => {
  const navigate = useNavigate();

  const onClick = () => {
    authenticate();
    navigate("profile");
  };
  return (
    <div>
      <h2> Please Login </h2>
      <button onClick={onClick}>Login</button>
    </div>
  );
};

export default Auth;
