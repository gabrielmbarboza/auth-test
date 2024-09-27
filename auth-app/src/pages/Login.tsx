import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    auth.login(email, password)
    .then(() => navigate('/users'))
    .catch(error => { toast.error("Oops! Your credentials are invalid") });
  }

  return (
    <>
      <div className="container-login">
        <div className="img-box">
          <img src={loginImageMain} alt="Login"/>
        </div>
        <div className="content-box">
          <div className="form-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <InputText name="email" label="Email" type="email" placeholder="email@host.com" onChangeState={setEmail}/>
              <InputText name="password" label="Password" type="password" placeholder="enter your password" onChangeState={setPassword}/>
              <div className="input-box">
                <input className="input-login" type="submit" value="Entrar" />
              </div>
              <div className="input-box">
                <p>
                  Don't have an account? <a href="/signup">Sign up</a>
                </p>
              </div>
            </form>
            <h3>Log in with</h3>
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
