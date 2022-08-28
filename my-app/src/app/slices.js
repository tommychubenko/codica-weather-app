import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const API = "05e9e9a72c07f3a5949ba94dba206c0d";

export const getCityDetails = createAsyncThunk(
  "city/getCityDetails",
  async function ({ id }) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API}&units=metric&temp_min`
    );
    const data = await response.json();
    return data;
  }
);

const selectedCities = createSlice({
  name: "Selected",
  initialState: {
    cities: [
      {
        coord: {
          lon: 30.5167,
          lat: 50.4333,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        base: "stations",
        main: {
          temp: 33.73,
          feels_like: 32.77,
          temp_min: 32.59,
          temp_max: 33.73,
          pressure: 1016,
          humidity: 29,
        },
        visibility: 10000,
        wind: {
          speed: 0.45,
          deg: 239,
          gust: 2.68,
        },
        clouds: {
          all: 0,
        },
        dt: 1661426733,
        sys: {
          type: 2,
          id: 2003742,
          country: "UA",
          sunrise: 1661396485,
          sunset: 1661446752,
        },
        timezone: 10800,
        id: 703448,
        name: "Kyiv",
        cod: 200,
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    deleteCity(state, action) {
      const index = state.cities.indexOf(
        state.cities.find((city) => city.id === action.payload)
      );
      state.cities.splice(index, 1);
    },
  },
  extraReducers: {
    [getCityDetails.pending]: (state) => {
      state.loading = true;
    },
    [getCityDetails.fulfilled]: (state, action) => {
      state.loading = false;

      for (const city of state.cities) {
        if (city.id === action.payload.id) {
          const index = state.cities.indexOf(city);
          Notify.success("Weather info updated");
          state.cities.splice(index, 1, action.payload);
          return;
        }
      }

      state.cities = [...state.cities, action.payload];
    },
    [getCityDetails.error]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default selectedCities.reducer;

export const { addSelectedCity, deleteCity, refetch } = selectedCities.actions;
