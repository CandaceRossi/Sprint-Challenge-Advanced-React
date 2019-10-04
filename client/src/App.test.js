import React from "react";
import { render } from "@testing-library/jest-dom";
import App from "./App";
import PlayerData from "./components/PlayerData";

it("renders without crashing", () => {
  render(<App />);
});
test("List Header is Found", () => {
  const listHeader = "List-Header";
  const { getByTestId } = render(<PlayerData />);
  getByTestId(/listHeader/i);

  expect(getByTestId(listHeader)).toBeInTheDocument();
});

// describe("records toggle", () => {
//   test("toggles players", () => {
//     const component = render(<App />);
//     const toggleDisplay = component.getByTestId("toggle");
//     fireEvent.click(toggle);
//     expect(toggle).toHaveTextId("toggle");
//   });
// });

// it('renders "players" text', () => {
//   const input = rtl.render(<App />);
//   const playersText = wrapper.getByText("");
// });
