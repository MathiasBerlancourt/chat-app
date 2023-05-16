import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../assets/Context/UserContext";
import { IoSend } from "react-icons/io5";
import InputEmoji from "react-input-emoji";
import Contacts from "../components/Contacts";
import { IoIosContact, IoIosChatbubbles } from "react-icons/io";

const Chat = () => {
  const { username, id } = useContext(UserContext);
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    const newWs = new WebSocket("ws://localhost:3000");
    setWs(newWs);
    newWs.addEventListener("message", handleMessage);
    return () => {
      newWs.removeEventListener("message", handleMessage);
      newWs.close();
    };
  }, []);

  const handleMessage = (event) => {
    const { data } = event;
    const newLog = [...chatLog, data];
    setChatLog(newLog);
  };

  const sendMessage = () => {
    if (!message) return;
    const messageObj = {
      id,
      username,
      message,
      timestamp: new Date().toISOString(),
    };
    ws.send(JSON.stringify(messageObj));
    setMessage("");
  };

  const handleOnEnter = () => {
    sendMessage();
  };

  if (!username) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="bg-slate-300">
        <div className="w-full h-screen flex ">
          <div className="w-1/4 h-full bg-sky-800">
            <div className="flex text-2xl text-gray-400  items-center ">
              <IoIosContact className="text-white" />
              <h2 className="text-2xl text-white px-4">Contacts</h2>
            </div>
            <Contacts />
          </div>

          <div className="w-3/4 h-full bg-sky-200 px-4 flex flex-col justify-evenly">
            <div className="flex text-2xl text-gray-400 items-center ">
              <IoIosChatbubbles className="text-white" />
              <h2 className="text-2xl text-white px-4">Messages</h2>
            </div>
            <div className=" overflow-y-auto border-2 rounded-xl h-[68rem]">
              {chatLog.map((item, index) => (
                <div key={index}>
                  <p>{item.username}: </p>
                  <p>{item.message}</p>
                </div>
              ))}
            </div>
            <div className="flex space-x-2 ">
              <InputEmoji
                value={message}
                onChange={setMessage}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Ecrire un message"
              />

              <IoSend
                type="button"
                onClick={sendMessage}
                className="text-sky-800 text-3xl hover:text-sky-500 mt-1 "
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Chat;
