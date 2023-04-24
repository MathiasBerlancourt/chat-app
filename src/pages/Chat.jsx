import React from "react";
import { useContext } from "react";
import { UserContext } from "../assets/Context/UserContext";

const Chat = () => {
  useContext(UserContext);
  const { username, id } = useContext(UserContext);

  return (
    <div>
      welcome {username} avec l'id {id}
    </div>
  );
};

export default Chat;
