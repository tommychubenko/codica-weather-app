import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders App", () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // expect(getByText(/learn/i)).toBeInTheDocument();
  expect(getByTestId("app")).toBeInTheDocument();

  // const input = screen.getByTestId("navigation");
  // expect(input).toBeInTheDocument();
});
