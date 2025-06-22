import { WordOmitter } from "./components/wordOmitter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

test("omits certain words when typing in the input field", () => {
  render(<WordOmitter />);

  const input = screen.getByTestId("input-area");
  fireEvent.change(input, { target: { value: "This is a test sentence." } });

  const output = screen.getByTestId("output-text");

  expect(output.textContent).toBe("This is test sentence.");
});

test("toggles between omitting and showing all words", () => {
  render(<WordOmitter />);

  const input = screen.getByTestId("input-area");
  fireEvent.change(input, { target: { value: "This is a test sentence." } });

  const toggleButton = screen.getByTestId("action-btn");
  fireEvent.click(toggleButton);

  let output = screen.getByTestId("output-text");
  expect(output.textContent).toBe("This is a test sentence.");

  fireEvent.click(toggleButton);

  output = screen.getByTestId("output-text");
  expect(output.textContent).toBe("This is test sentence.");
});

test("clears the input and output fields", () => {
  render(<WordOmitter />);

  const input = screen.getByTestId("input-area");
  fireEvent.change(input, { target: { value: "This is a test sentence." } });

  const clearButton = screen.getByTestId("clear-btn");
  fireEvent.click(clearButton);

  expect(input.value).toBe("");

  const output = screen.getByTestId("output-text");
  expect(output.textContent).toBe("");
});
