import { useState } from "react";
import searchimg from "../design/assets/icons/search.svg";
import rainyimg from "../design/assets/icons/rainy.svg";
import snowyimg from "../design/assets/icons/snowy.svg";
import backgroundimg from "../design/assets/backgrounds/rainy.svg";

function Weather() {
  return (
    <>
      <main className="base2 df jc aic">
        <div className="container df jc">
          <div className="row border-weather">
            <div className="col df jc aic">
              <div className="row content">
                <div className="col-sm-12 col-md-8 col-lg-8 left df jc aie">
                  <div className="row bottom">
                    <div className="col-auto text-48 df aie degree">
                      <div>08*</div>
                    </div>
                    <div className="col df aie">
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
                    <div className="col df aie">
                      <div className="row">
                        <div className="col-12">
                          <div className="weather-imgs">
                            <img src={rainyimg} alt="rainy" />
                          </div>
                        </div>
                        <div className="col-12 text-12">Rainy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 right">
                  <div className="row">
                    <div className="col-12 text-12 rainy">
                      <div className="row">
                        <div className="col mt-4 pointer">
                          <div className="search ">Another Location</div>
                          <div className="bottom-line mt-1"></div>
                        </div>
                        <div className="col-auto p-0 pointer">
                          <div className="search-box">
                            <img src={searchimg} alt="Search icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 text-12 rainy">
                      <div className="row">
                        <div className="results dg gap-3 mt-4 ">
                          <div className="col-12 pointer">Manchester</div>
                          <div className="col-12 pointer">New York</div>
                          <div className="col-12 pointer">Birmingham</div>
                          <div className="col-12 pointer">California</div>
                          <div className="col-12 bottom-line mt-4"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 rainy">
                      <div className="row">
                        <div className="details dg gap-3 mt-4 ">
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
                          <div className="col-12 bottom-line mt-4"></div>
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
