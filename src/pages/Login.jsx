import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../assets/Context/UserContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [registerResponse, setRegisterResponse] = useState("");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext); //je renomme et Username en setLoggedInUsername car on a deja une variable username

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault(); // Empêcher la soumission du formulaire par défaut

    {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URI}/login`,
          {
            username: username,
            password: password,
          }
        );
        console.log("responseData:", response.data);
        setRegisterResponse(response.data);
        setLoggedInUsername(response.data.username);
        setId(response.data._id);
        if (registerResponse.id) {
          navigate("/chat");
          console.log("navigate to chat ok");
        } else {
          setError("Mot de passe ou nom d'utilisateur incorrect");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="h-screen bg-blue-200 flex flex-col space-y-32 justify-center items-center">
      <img
        src="./../src/assets/img/chat-app-logo.png"
        alt="logo"
        className="border-white border-2"
      />
      <form
        onSubmit={handleLogin}
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

        {error && (
          <div className="flex justify-center text-center text-red-400 font-bold">
            {error}
          </div>
        )}

        <div className="flex justify-center pt-16">
          <button
            type="button" // Modifier le type du bouton en "button"
            onClick={handleLogin}
            className="bg-blue-800 text-white hover:bg-sky-700 rounded-md py-2 px-2 w-auto text-lg  "
          >
            SE CONNECTER
          </button>
        </div>
        <div className="text-blue-600 text-sm font-semibold ">
          Vous n'avez pas de compte ?
          <Link className="underline" to="/register">
            Inscrivez-vous!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
