import { useState } from "react";
import crossimg from "../design/assets/icons/cross.svg";
import { Navigate, useNavigate } from "react-router-dom";
import Calculator1 from "../components/Calculator1";

function Calculator() {
  const navigate = useNavigate();

  return (
    <>
    <div className="App">
      <Calculator1/>
      <p className="developer">
        Developed by 👩🏻‍💻 <span>Kumsal</span>
      </p>
    </div>






      <main className="base2 df jc aic">
        <div className="container df jc">
          <div className="row border-weather2  df jc">
            <div className="filter df jc aic">
              <div className="clc">
                <div className="col square">
                  <div className="row pad">
                    <div className="col-12 text-36 df je aic">123 x 28</div>
                    <div className="col-12 mt-3 text-19">
                      <div className="row g-4">
                        <div className="col-12 ms">
                          <div className="row">
                            <div className="col-3 df jc aic pointer touch">
                              m+
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              m-
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              mc
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              mr
                            </div>
                          </div>
                        </div>
                        <div className="col-12 789">
                          <div className="row">
                            <div className="col-3 df jc aic pointer touch">
                              7
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              8
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              9
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              +
                            </div>
                          </div>
                        </div>
                        <div className="col-12 456">
                          <div className="row">
                            <div className="col-3 df jc aic pointer touch">
                              4
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              5
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              6
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              x
                            </div>
                          </div>
                        </div>
                        <div className="col-12 123">
                          <div className="row">
                            <div className="col-3 df jc aic pointer touch">
                              1
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              2
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              3
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              -
                            </div>
                          </div>
                        </div>
                        <div className="col-12 0 ">
                          <div className="row">
                            <div className="col-3 df jc aic pointer touch">
                              0
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              .
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              =
                            </div>
                            <div className="col-3 df jc aic pointer touch">
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
