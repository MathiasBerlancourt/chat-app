import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../assets/Context/UserContext";

const Chat = () => {
  const { username, id } = useContext(UserContext);

  if (!username) {
    return <Navigate to="/register" />;
  } else {
    return (
      <div>
        WELCOME {username} avec l'id {id}!
      </div>
    );
  }
};

export default Chat;
