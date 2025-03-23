import { useState } from "react";
import crossimg from "../design/assets/icons/cross.svg";
import { Navigate, useNavigate } from "react-router-dom";
import Calculator1 from "../components/Calculator1";
import Tabs from "../components/Tabs";

function Calculator() {
  const navigate = useNavigate();

  return (
    <>
      <Tabs className="calculator-theme" />
      <main className="base3 df jc aic">
        <div className="container df jc">
          <div className="row border-weather2  df jc">
            <div className="filter df jc aic">
              <div className="clc">
                <div className="col square">
                  <div className="App">
                    <Calculator1 />
                    <p className="developer">
                      Developed by 👩🏻‍💻 <span>Kumsal</span>
                    </p>
                  </div>
                </div>
                <div
                  className="circle pointer df jc aic"
                  onClick={() => navigate("/")}
                >
                  <div className="cross">
                    <img src={crossimg} alt="close" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Calculator;
