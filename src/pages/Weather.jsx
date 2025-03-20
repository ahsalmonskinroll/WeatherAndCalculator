import { useState } from "react";

function Weather() {
  return (
    <>
      <main className="base df jc aic">
        <div className="container">
          <div className="row border-weather">
            <div className="col">
              <div className="row content">
                <div className="col-sm-12 col-md-8 col-lg-8 left df jc aie">
                  <div className="row bottom">
                    <div className="col-auto text-48">08*</div>
                    <div className="col">
                      <div className="row">
                        <div className="col-12 df jc text-24">London</div>
                        <div className="col-12 text-12">
                          <div className="row">
                            <div className="col-4">06:09</div>
                            <div className="col-8">-Sunday, 6 Oct '25</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="row">
                        <div className="col-12">img</div>
                        <div className="col-12 text-12">rainy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 right">
                  <div className="row">
                    <div className="col-12 text-12 buttom-line">
                      <div className="row">
                        <div className="col">Another Location</div>
                        <div className="col-auto">Search icon</div>
                      </div>
                    </div>
                    <div className="col-12 text-12 buttom-line">
                      <div className="row">
                        <div className="col-12">Manchester</div>
                        <div className="col-12">New York</div>
                        <div className="col-12">Birmingham</div>
                        <div className="col-12">California</div>
                      </div>
                    </div>
                    <div className="col-12 buttom-line">
                      <div className="row">
                        <div className="col-12">Weather Details</div>
                        <div className="col-12 text-12">
                          <div className="row">
                            <div className="col">Cloudy</div>
                            <div className="col-auto">86%</div>
                          </div>
                        </div>
                        <div className="col-12 text-12">
                          <div className="row">
                            <div className="col">Cloudy</div>
                            <div className="col-auto">86%</div>
                          </div>
                        </div>
                        <div className="col-12 text-12">
                          <div className="row">
                            <div className="col">Cloudy</div>
                            <div className="col-auto">86%</div>
                          </div>
                        </div>
                        <div className="col-12 text-12">
                          <div className="row">
                            <div className="col">Cloudy</div>
                            <div className="col-auto">86%</div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Weather;
