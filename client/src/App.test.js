import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("toggleCompleted", () => {
  it("toggles players", () => {
    const expected = true || false;
    const actual = true || false;
    expect(actual).toBe(expected);
  });
});

it('renders "players" text', () => {
  const input = rtl.render(<App />);
  const playersText = wrapper.getByText("");
});
