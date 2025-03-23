import { useEffect, useState } from "react";
import searchimg from "../design/assets/icons/search.svg";
import rainyimg from "../design/assets/icons/rainy.svg";
import snowyimg from "../design/assets/icons/snowy.svg";
import backgroundimg from "../design/assets/backgrounds/rainy.svg";
import Tabs from "../components/Tabs";
import usePosition from "../hooks/usePosition";
import axios from "axios";
import { data } from "react-router-dom";

function Weather() {
  const BASE_URL =
    "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`";

  const api = axios.create({
    baseURL: BASE_URL,
  });

  const [weather, setWeather] = useState();
  const { latitude, longitude, error } = usePosition();
  // console.log(latitude);
  // console.log(longitude);

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_DATA;
    //  console.log(key);

    const lang = navigator.language.split("-")[0];

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}`
      );
      console.log(data);
      setWeather(data);
    } catch {
      console.log();
      alert("veriler çekilemedi");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  // --------------------------------------------------------------------------------------------------------------
  //  const [query, setQuery] = useState(""); // Arama kutusundaki şehir ismini saklar
  // const url = "https://api.openweathermap.org/data/2.5/";
  // const key = "8f6788c016f206d040961341c67476b0";

  // // Enter tuşuna basıldığında API'yi çağır
  //  const handleKeyPress = (e) => {
  //    if (e.key === "Enter") {
  //      getResult(query);
  //    }
  //  };

  //  const getResult = async (cityName) => {
  //    try {
  //      const response = await fetch(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`);
  //      const data = await response.json();
  //      console.log(data);
  //    } catch (error) {
  //      console.error("Hata oluştu:", error);
  //    }
  //  };
  // ------------------------------------------------------ js hali aşağıda, react olacak.
  //  const setQuery = (e) => {
  //    if(e.keyCode == "13")
  //      getResult(searchBar.value)
  //  }

  //  const getResult = (cityName) => {
  //    console.log(cityName);
  //  }

  //  const searchBar = document.getElementById("searchBar");
  //  searchBar.addEventListener("keypress", setQuery)

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
                      {weather?.main?.temp && (
                        <div>{Math.ceil(weather.main.temp - 273.15)}°C</div>
                      )}
                    </div>
                    <div className="col df aie">
                      <div className="row">
                        {weather?.name && (
                          <div className="col-12 text-24 p-0 df jc city">
                            {weather.name}
                          </div>
                        )}
                        <div className="col-12 text-12">
                          <div className="row row-cols-2 df jc">
                            <div className="col-auto p-0">06:09</div>
                            <div className="col-auto p-0">
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
                            <img src={rainyimg} alt="rainy" />
                          </div>
                        </div>
                        {weather?.weather &&
                          weather.weather.map((data, index) => (
                            <div key={index} className="col-12 text-12 desc">
                              {data.main}
                            </div>
                          ))}
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
                            type="text"
                            id="searchBar"
                            placeholder="Another Location"
                          />
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
                              <div className="col-auto">62%</div>
                            </div>
                          </div>
                          <div className="col-12 text-12">
                            <div className="row">
                              <div className="col wind">Wind</div>
                              <div className="col-auto">8km/h</div>
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
