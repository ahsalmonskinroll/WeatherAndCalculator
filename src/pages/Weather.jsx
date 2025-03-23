import { useEffect, useRef, useState } from "react";
import searchimg from "../design/assets/icons/search.svg";
import rainyimg from "../design/assets/icons/rainy.svg";
import snowyimg from "../design/assets/icons/snowy.svg";
import hotimg from "../design/assets/icons/hot.svg";
import thunderimg from "../design/assets/icons/thunder.svg";
import clearimg from "../design/assets/icons/clear.svg";
import cloudyimg from "../design/assets/icons/cloudy.svg";
import mistimg from "../design/assets/icons/mist.svg";
import backgroundimg from "../design/assets/backgrounds/rainy.svg";
import Tabs from "../components/Tabs";
// import usePosition from "../hooks/usePosition";
// import axios from "axios";
// import { data } from "react-router-dom";

// function Weather() {
   const Weather = () => {  // function yerine burada yazmış ama ence gerek yok

  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clearimg,
    "01n": clearimg,
    "02d": cloudyimg,
    "02n": cloudyimg,
    "03d": cloudyimg,
    "03n": cloudyimg,
    "04d": cloudyimg,
    "04n": cloudyimg,
    "09d": rainyimg,
    "09n": rainyimg,
    "10d": rainyimg,
    "10n": rainyimg,
    "11d": thunderimg,
    "11n": thunderimg,
    "13d": snowyimg,
    "13n": snowyimg,
    "50d": mistimg,
    "50n": mistimg,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Şehir ismi girin.");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clearimg;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        feelslike: data.main.feels_like,
        city: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetchin weather data");
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <>
      <Tabs className="weather-theme" />
      <main className="mt-5 df jc aic">
        <div className="container df jc">
          <div className="row border-weather">
            <div className="col df jc aic">
              <div className="row content">
                <div className="col-sm-12 col-md-8 col-lg-8 left df jc aie">
                  <div className="row bottom">
                    <div className="col-auto text-48 df aie temp">
                      <div>{weatherData.temperature}°c</div>
                    </div>
                    <div className="col df aie">
                      <div className="row">
                        <div className="col-12 text-24 p-0 df jc city">
                          {weatherData.city}
                        </div>
                        <div className="col-12 text-12">
                          <div className="row row-cols-2 df jc">
                            <div className="col-auto p-0 time">06:09</div>
                            <div className="col-auto p-0 date">
                              -Sunday, 6 Oct '25
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col df aie">
                      <div className="row">
                        <div className="col-12">
                          <div className="weather-imgs">
                            <img src={weatherData.icon} alt="weather icon" />
                          </div>
                        </div>

                        <div className="col-12 text-12 desc">Rainy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 right">
                  <div className="row">
                    <div className="col-12 text-12 rainy">
                      <div className="row">
                        <div className="col mt-4 pointer">
                          {/* <div className="search ">Another Location</div> */}
                          <input
                            ref={inputRef}
                            type="text"
                            id="searchBar"
                            placeholder="Another Location"
                          />
                          <div className="bottom-line mt-1"></div>
                        </div>
                        <div className="col-auto p-0 pointer">
                          <div className="search-box">
                            <img
                              src={searchimg}
                              alt="Search icon"
                              onClick={() => search(inputRef.current.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 text-12 rainy">
                      <div className="row">
                        <div className="results dg gap-3 mt-4 ">
                          <div className="col-12 pointer">
                            <div>Manchester</div>
                          </div>
                          <div className="col-12 pointer">
                            <div>New York</div>
                          </div>
                          <div className="col-12 pointer">
                            <div>Birmingham</div>
                          </div>
                          <div className="col-12 pointer">
                            <div>California</div>
                          </div>
                          <div className="col-12 bottom-line mt-4"></div>
                        </div>
                      </div>
                    </div>
                    {/* {weatherData?<> */}
                    <div className="col-12 rainy">
                      <div className="row">
                        <div className="details dg gap-3 mt-4 ">
                          <div className="col-12">Weather Details</div>
                          <div className="col-12 text-12">
                            <div className="row">
                              <div className="col cloudy">Cloudy</div>
                              <div className="col-auto">86%</div>
                            </div>
                          </div>
                          <div className="col-12 text-12">
                            <div className="row">
                              <div className="col humidity">Humidity</div>
                              <div className="col-auto">
                                {weatherData.humidity}%
                              </div>
                            </div>
                          </div>
                          <div className="col-12 text-12">
                            <div className="row">
                              <div className="col wind">Wind</div>
                              <div className="col-auto">
                                {weatherData.windSpeed}km/h
                              </div>
                            </div>
                          </div>
                          <div className="col-12 text-12">
                            <div className="row">
                              <div className="col rain">Rain</div>
                              <div className="col-auto">8 mm</div>
                            </div>
                          </div>
                          <div className="col-12 bottom-line mt-4"></div>
                        </div>
                      </div>
                    </div>
                    {/* </>:<></>} */}
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
