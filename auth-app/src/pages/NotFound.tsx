import React from "react";
import notFoundImage from "../assets/img/not_found.svg";
import "../styles/global.css";

function NotFound() {
  return (
    <>
      <div className="container-login">
        <div className="img-box">
          <img src={notFoundImage} alt="Página Não Encontrada"/>
        </div>
        <div className="content-box">
          <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página não encontrada</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Desculpe, mas não encontramos a página que você está procurando.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="home-button"
            >
              Ir para a home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contate o suporte <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
