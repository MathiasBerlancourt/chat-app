import React from "react";

const Register = () => {
  const handleSubmit = (e) => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="adresse email" />
        <input type="password" placeholder="mot de passe" />
        <input type="password" placeholder="confirmation du mot de passe" />
      </form>
    </div>
  );
};

export default Register;
