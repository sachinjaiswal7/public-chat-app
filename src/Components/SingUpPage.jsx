import React from "react";

const SingUpPage = ({ setuser, loginHandle }) => {
  return (
    <div className="login">
      <button onClick={loginHandle}>Sign In With Google</button>
    </div>
  );
};

export default SingUpPage;
