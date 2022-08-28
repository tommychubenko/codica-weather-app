import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { deleteCity } from "../app/slices";
import { getCityDetails } from "../app/slices";
import { Outlet, Link } from "react-router-dom";
import { StyledLink } from "./StyledComponents";
import { RootState } from "../app/store";

export const Home = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const citiesFromRedux = useSelector((store) => store.selected);
  const dispatch = useAppDispatch();
  const baseImageURL = (image) =>
    `http://openweathermap.org/img/wn/${image}@2x.png`;

  return (
    <div className="city_card--thumb">
      <div className="city_card--list">
        {citiesFromRedux.cities.map((city) => {
          const {
            name,
            id,

            main: { temp },
            weather: {
              [0]: { icon },
            },
          } = city;

          return (
            <div className="city_card" key={id}>
              <div className="city_card--top">
                <p className="city_card--title">{name}</p>
                <div className="city_card--btns">
                  <button
                    className="city_card--btn"
                    onClick={() => {
                      dispatch(getCityDetails({ id }));
                    }}
                  >
                    Reload
                  </button>
                  <button
                    className="city_card--btn"
                    onClick={() => {
                      dispatch(deleteCity(id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="city_card--image">
                <img src={baseImageURL(icon)} alt="" />
                <div className="city_card--body">{Math.round(temp)}°C</div>
                <StyledLink to={`/city/${id}`} state={{ city: name }}>
                  View hourly forecast
                </StyledLink>
                {/* <button>
                  <Link
                    className="city_link"
                    to={`/city/${id}`}
                    state={{ city: name }}
                  >
                    More...
                  </Link>
                </button> */}
              </div>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};
