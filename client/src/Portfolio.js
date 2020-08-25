import React from "react";
import Stock from "./StockChart";
import Stock1 from "./StockChart1";
import Stock2 from "./StockChart2";
import auth from "./auth";

export const Portfolio = () => {
  return (
    <div>
      <div id="page-wrapper">
        <section id="wrapper">
          <header>
            <div className="inner">
              <h2>Portafolio de Inversiones</h2>

              <p>
                Nuestra estrategia de inversión se basa en diversificar ampliamente nuestro portafolio, al mismo tiempo que
                mantenemos los costos de transacción bajos para todos nuestros stakeholders, rebalanceando el portafolio 
                a fin de cada año.</p>
            </div>
          </header>

          <Stock />
          <br />
          <Stock1 />
          <br />
          <Stock2 />

          <div className="wrapper">
            <div className="inner">
              <h3 className="major">¿Por qué este portafolio?</h3>
              <p>
                Nuestros estudios a fondo con datos de más de 80 años del mercado financiero nos permitieron llegar 
                a crear un portafolio propio compuesto de 3 activos prioritarios: <strong>ACCIONES, BONOS y BIENES RAÍCES a través de ETFs</strong> (un 5% en CASH).
                 Ésto nos permite estar prudentemente diversificados, obtener un rentabilidad media consistente con muy poco riesgo 
                 debido a la naturaleza de los propios ETFs. 
              </p>

              <p>
                Nuestro fondo tiene una <strong>rentabilidad media anual del 10.92%</strong> y una <strong>desviación estándar de 10.76%</strong> (reinvirtiendo todos 
                <strong>dividendos medios de 1.5%</strong>). Consideramos que, para tener un portafolio mixto-conservador, la rentabilidad total de nuestro 
                fondo es mejor de lo que se podría esperar en cualquier otro fondo de inversión.
              </p>

              <p>
                <strong>(La selección de activos en el portafolio y los análisis de performance financiero son 
                propios y reales)</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
