import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <main className="base df jc aic">
        <div className="baseWrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 df jc">
                <div
                  className="row border-wrapper pointer"
                  onClick={() => navigate("/weather")}
                >
                  <div className="col mt-4 df jc ais text-24 burgundy">
                    Hava Durumu
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 df jc">
                <div
                  className="row border-wrapper pointer"
                  onClick={() => navigate("/calculator")}
                >
                  <div className="col mt-4 df jc ais text-24 burgundy">
                    Hesap Makinesi
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

export default App;
