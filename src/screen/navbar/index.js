import React, { Fragment, useEffect, useState } from "react";
import LogoImage from "../../icons/logo-frexco-slogan.png";
import iconCart from "../../icons/cart-outline.svg";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [quantidade, setQuantidade] = useState(localStorage.length / 2);

  useEffect(() => {
    setQuantidade(localStorage.length / 2);
  }, []);
  
  return (
    <Fragment>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link to={"/"}>
            <a class="navbar-item" href="#">
              <img src={LogoImage} width="112" height="28" />
            </a>
          </Link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item is-active">
            <div class="buttons">
              <button className="button is-light">
                <Link to={"/carrinho"}>
                  <span class="icon">
                    {localStorage.length / 2}
                    <img src={iconCart} />
                  </span>
                  <strong>Carrinho</strong>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;

//src="../../../public/logo-frexco-slogan.png"
