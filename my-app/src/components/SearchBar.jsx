import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { getCityDetails } from "../app/slices";
import allCities from "./city.list.json";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [listOfCities, setListOfCities] = useState([]);
  const dispatch = useDispatch();
  const citiesFromRedux = useSelector((store) => store.selected.cities);
  let navigate = useNavigate();

  useEffect(() => {
    input !== "" &&
      setListOfCities(
        allCities.filter((city) =>
          city.name.toLowerCase().includes(input.toLocaleLowerCase())
        )
      );
  }, [input]);

  return (
    <div className="search" data-testid="search">
      <a href="/" className="search_link">
        <p className="search_logo">Codica weather app</p>
      </a>

      <input
        className="search_input"
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Enter a city name in Ukraine"
        value={input}
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
      />
      <div className="search_thumb">
        <ul className="search_thumb--list">
          {listOfCities.length < 3 &&
            listOfCities.map(({ name, id }) => {
              return (
                <li key={id} className="search_thumb--item">
                  <a
                    className="search_thumb--link"
                    onClick={() => {
                      for (const city of citiesFromRedux) {
                        if (city.id === id) {
                          Notify.failure(`${name} is already in you list!`);
                          return;
                        }
                      }

                      dispatch(getCityDetails({ id }));
                      Notify.success(`Successfully added ${name} to your list`);
                      setListOfCities([]);
                      setInput("");
                      navigate("/");
                    }}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
