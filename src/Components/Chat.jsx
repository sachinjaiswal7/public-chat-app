import React from "react";
import { CgProfile } from "react-icons/cg";

const Chat = ({ user, uri, msg }) => {
  return (
    <>
      <div className={user === "me" ? "counter-message" : "message"}>
        {user !== "me" ? uri ? <img src={uri} alt="" /> : <CgProfile /> : null}
        <div>{msg}</div>
        {user === "me" ? uri ? <img src={uri} alt="" /> : <CgProfile /> : null}
      </div>
    </>
  );
};

export default Chat;
