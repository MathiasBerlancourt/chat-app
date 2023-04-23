import React from "react";

const Register = () => {
  const handleSubmit = (e) => {};
  return (
    <div className="h-screen bg-blue-200 flex flex-col space-y-32 justify-center items-center">
      <img
        src="./../src/assets/img/chat-app-logo.png"
        alt="logo"
        className="border-white border-2"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  w-3/4 md:w-1/4 space-y-4  "
      >
        <input
          className="h-12 rounded-sm p-2 text-blue-800 text-lg"
          type="email"
          placeholder="adresse email"
        />
        <input
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
          <input
            type="submit"
            value="S'inscrire"
            className="bg-blue-800 text-white hover:bg-sky-700 rounded-md py-2 w-32 text-lg  "
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
