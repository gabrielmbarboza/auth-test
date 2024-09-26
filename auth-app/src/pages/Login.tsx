import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Login.css";
import loginImageMain from "../assets/img/login.svg";
import googleLogo from "../assets/img/google.svg";
import facebookLogo from "../assets/img/facebook.svg";
import appleLogo from "../assets/img/apple.svg";
import { useAuth } from "../hooks/useAuth";
import { InputText } from "../components/InputText";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await auth.login(email, password)

      navigate('/explorer')
    } catch (error) {
      toast.error("Opa! Credenciais inválidas");
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/><ToastContainer />
      <div className="container-login">
        <div className="img-box">
          <img src={loginImageMain} alt="Login"/>
        </div>
        <div className="content-box">
          <div className="form-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <InputText name="email" label="Email" type="email" placeholder="email@host.com" onChangeState={setEmail}/>
              <div className="input-box">
                <span>Senha</span>
                <input name="password" className="input-login" type="password" placeholder="informe sua senha" onChange={e => {
                    setPassword(e.target.value)
                }}/>
              </div>
              <div className="input-box">
                <input className="input-login" type="submit" value="Entrar" />
              </div>
              <div className="input-box">
                <p>
                  Não Tem Uma Conta? <a href="/signup">Inscreva-se</a>
                </p>
              </div>
            </form>
            <h3>Logar Com</h3>
            <ul className="ul">
              <li>
                <img src={googleLogo} alt="google"/>
              </li>
              <li>
                <img src={facebookLogo} alt="facebook" />
              </li>
              <li>
                <img src={appleLogo} alt="google" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
