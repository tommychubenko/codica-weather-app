import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../app/store";

const API = "05e9e9a72c07f3a5949ba94dba206c0d";

export const Details = () => {
  const [thisCityWeather, setThisCityWeather] = useState({ hourly: [] });

  const citiesFromRedux = useSelector(
    (store: RootState) => store.selected.cities
  );

  const colorPicker = (temp: number) => {
    if (temp <= -10) {
      return "#0028FF";
    }
    if (temp <= 0) {
      return "00C9FF";
    }
    if (temp <= 5) {
      return "#00F2FF";
    }
    if (temp <= 10) {
      return "#00FF98";
    }
    if (temp <= 15) {
      return "#C8FF00 ";
    }
    if (temp <= 20) {
      return "#FCFF00";
    }
    if (temp <= 25) {
      return "#FFCA00";
    }
    if (temp <= 30) {
      return "#FF9D00";
    }
    if (temp <= 35) {
      return "#F29100";
    }
    if (temp > 35) {
      return "#E84100";
    }
  };

  const params = useParams();

  const getTime = (unix: number) => {
    const date = new Date(unix * 1000);
    const day = date.getDate();
    const hours = date.getHours();
    return `${hours}:00`;
  };

  const thisCity = citiesFromRedux.find(
    (city) => city.id === Number(params.id)
  );

  const getHourlyWeather = async () => {
    thisCity &&
      (await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${thisCity.coord.lat}&lon=${thisCity.coord.lon}&exclude=daily&units=metric&appid=${API}`
      )
        .then((r) => r.json())
        .then((r) => setThisCityWeather(r))
        .catch((e) => console.log(e)));
  };

  useEffect(() => {
    getHourlyWeather();
  }, [params]);

  let navigate = useNavigate();

  return (
    <div className="hourlyWeather_thumb">
      <button
        className="hourlyWeather_closeBtn"
        onClick={() => {
          navigate("/");
        }}
      >
        Close
      </button>
      <h3 className="hourlyWeather_title">
        Hourly forecast for {thisCity && thisCity.name}{" "}
      </h3>
      <Outlet />
      <ul className="hourlyWeather_list">
        {thisCityWeather.hourly.length > 0 &&
          thisCityWeather.hourly.map(
            ({
              temp,
              dt,
              weather: {
                [0]: { icon },
              },
            }) => {
              return (
                <li
                  className="hourlyWeather_item"
                  style={{ gap: `${Math.abs(temp) + 10}px` }}
                >
                  <p>{getTime(dt)}</p>

                  <p
                    className="hourlyWeather_temperature"
                    style={{
                      transform: `translateY(${temp}px)`,
                      backgroundColor: `${colorPicker(temp)}`,
                    }}
                  >
                    {Math.round(temp)}°C
                  </p>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};
