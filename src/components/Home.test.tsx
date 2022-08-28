import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { Home } from "./Home";

test("renders SearchBar", () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(getByTestId("home")).toBeInTheDocument();
});
export {};
