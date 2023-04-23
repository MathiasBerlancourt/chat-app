import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async () => {};
  return (
    <div className="h-screen bg-blue-200 flex flex-col space-y-32 justify-center items-center">
      <img
        src="./../src/assets/img/chat-app-logo.png"
        alt="logo"
        className="border-white border-2"
      />
      <form
        onSubmit={handleRegister}
        className="flex flex-col  w-3/4 md:w-1/4 space-y-4  "
      >
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="h-12 rounded-sm p-2 text-blue-800 text-lg"
          type="username"
          placeholder="nom d'utilisateur"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="h-12 rounded-sm p-2 text-blue-800 text-lg"
          type="password"
          placeholder="mot de passe"
        />
        <input
          className="h-12 rounded-sm p-2 text-blue-800 text-lg"
          type="password"
          placeholder="confirmation du mot de passe"
        />
        <div className="flex justify-center pt-16">
          <button
            onClick={handleRegister}
            className="bg-blue-800 text-white hover:bg-sky-700 rounded-md py-2 w-32 text-lg  "
          >
            /S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
