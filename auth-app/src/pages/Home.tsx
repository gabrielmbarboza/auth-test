import React from "react";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="common-container">
      <header>
        <div className="container header-container">
          <h1 className="header-title">
            Auth Test
          </h1>
          <div className="relative">
            <Link to="/login" className="profile-menu-button">
              <FiLock className="button-size" />
              <span className="font-color-white">Login</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
      <strong><span>⚠️⚠️⚠️⚠️</span> Atenção! <span>⚠️⚠️⚠️⚠️</span></strong>
      <br />
      <br />
      <h3>Este layout foi desenvolvido por um desenvolvedor Backend! O login está logo ali a direita! :D</h3>
      </main>
    </div>
  );
};

export default Home;
