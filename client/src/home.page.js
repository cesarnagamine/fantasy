import React from "react";
import auth from "./auth";

import MailForm from "./MailForm";
import Portfolio from "./Portfolio";
import "./App.css";

export const AppLayout = (props) => {
  console.log(props);
  console.log(auth);

  return (
    <div>
      <div id="page-wrapper">
        <header id="header">
          <nav>
            <a href="#portfolio">Portafolio</a>
            <a href="#footer">Escríbenos</a>
            <a href="/">Log Out</a>
          </nav>
        </header>

        <section id="banner">
          <div className="inner">
            <div className="logo">
              <span className="icon fa-gem"></span>
            </div>
            <h2>
              Bienvenido, {auth.authObj.profileObj.givenName}{" "}
              {auth.authObj.profileObj.familyName}!
            </h2>
            <p>
              Te invitamos a ser parte de la forma más inteligente de invertir.
            </p>
          </div>
        </section>

        <section id="wrapper">
          <section id="one" className="wrapper spotlight style1">
            <div className="inner">
              <a href="#portfolio" className="image">
                <img src={auth.authObj.profileObj.imageUrl} alt="" />
              </a>
              <div className="content">
                <h2 className="major">Tú puedes lograr todas tus metas financieras con nosotros</h2>
                <p>
                  Invierte de manera diversificada, en los mejores activos
                  globales y con un enfoque conservador consistentemente rentable.
                </p>
                <a href="#portfolio">Más detalles</a>
              </div>
            </div>
          </section>
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="four" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major">Nuestro Socios Estratégicos</h2>
            <p>
              Trabajamos con socios proveedores de larga experiencia, reconocimiento total en el mercado global y alta innovación, 
              para servirles de la manera más eficiente y rápida.
            </p>
            <section className="features">
              <article>
            
                <h3 className="major">The Vanguard Group</h3>
                <p>
                  Uno de los grupos más relevantes en el mercado financiero
                  global, con más de cinco décadas ofreciendo los mejores
                  productos financieros a un bajo costo.
                </p>
                <a
                  href="https://investor.vanguard.com/corporate-portal/"
                  className="special"
                  target="blank"
                >
                  Conócelos aquí
                </a>
              </article>
              <article>
              
                <h3 className="major">Ally Bank</h3>
                <p>
                  El banco digital con mayor prestigio en el mundo, modelo de
                  innovación en la industria bancaria que nos permitirá servirte
                  en todo momento y en cualquier lugar.
                </p>
                <a
                  href="https://www.ally.com/"
                  className="special"
                  target="blank"
                >
                  Conócelos aquí
                </a>
              </article>
            </section>
          </div>
        </section>

        <section id="footer">
          <div className="inner">
            <h2 className="major">Contáctate con nosotros</h2>
            <p>
              Para contactarse conmigo, por favor hacerlo a través del
              formulario de mi página de desarrollador. Este formulario registra
              el mail en la base de datos -Cluster en MongoDB Atlas-, pero Gmail
              bloqueará la salida del mail por razones de seguridad, ya que
              Gmail espera que los email sean enviamos por una persona y no por
              una aplicación.
            </p>
            <MailForm />
            <ul className="contact">
              <li className="icon solid fa-home">
                Fantasy Co.
                <br />
                1234 Nose Donde #2894
                <br />
                Lima, Peru.
              </li>
              <li className="icon brands fa-facebook-f">
                <a href="https://www.facebook.com/ken.naga.90/" target="blank">Ken NT</a>
              </li>
              <li className="icon solid fa-phone">987-539-441</li>
              <li className="icon solid fa-envelope">
                <a href="#">cesarnagamine@gmail.com</a>
              </li>
            </ul>
            <ul className="copyright">
              <li>&copy; César (Ken) Nagamine T. All rights reserved.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
