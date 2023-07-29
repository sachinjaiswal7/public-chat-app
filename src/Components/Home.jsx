import React from "react";
import { IoSend } from "react-icons/io5";
import Chat from "./Chat";

const Home = ({
  logoutHandle,
  msgSubmitHandle,
  message,
  setMessage,
  messages,
  user,
  scrollRef
}) => {
  return (
    <div className="container">
      <button onClick={logoutHandle}>Logout</button>
      <div className="chat">
        {messages.map((item) => {
          return (
            <Chat
              key={item.id}
              user={item.uid === user.uid ? "me" : "other"}
              msg={item.message}
              uri={item.photoUrl}
            />
          );
        })}
        <div ref={scrollRef}></div>
      </div>
      <form onSubmit={msgSubmitHandle} className="keyboard">
        <input
          type="text"
          placeholder="Message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit">
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default Home;
