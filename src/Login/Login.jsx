import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {
    const [usernome, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log("Envio");
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
      <h1>Acesse o sistema</h1>
      <div>
      <input type="email" placeholder="E-mail" />
      <FaUser className="icon" />
      </div>
      <div>
      <input type="password" placeholder="Senha" />
      <FaLock className="icon" />
      </div>

      <div className="recall-forget">
        <label>
            <input type="checkbox" />
            Lembre de mim
        </label>
        <a href="#"> Esqueceu a senha?</a>
      </div>

      <button>Entrar</button>

    <div className="signup-link">
        <p>
            Não tem uma conta? <a href="#">Registrar</a>
        </p>
    </div>
    </form>
    </div>
  )
}

export default Login