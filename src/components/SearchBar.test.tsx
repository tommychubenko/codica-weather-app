import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { SearchBar } from "./SearchBar";

test("renders SearchBar", () => {
  const { getByText, getByTestId } = render(<SearchBar />);

  expect(getByTestId("search")).toBeInTheDocument();
});
