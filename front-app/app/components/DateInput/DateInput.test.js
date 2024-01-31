import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DateInput from "./index";

describe("DateInput", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(
      <DateInput
        label="Start Date:"
        for="Start Date:"
        value="2023-02-01"
        minDate="2023-01-01"
        onChange={mockOnChange}
        isSelected={true}
      />
    );
  });

  test("renders with correct label and value", () => {
    expect(screen.getByLabelText("Start Date:")).toBeInTheDocument();
    expect(screen.getByLabelText("Start Date:")).toHaveValue(
      "2023-02-01"
    );
  });

  test("has correct border style when isSelected is true", () => {
    const input = screen.getByLabelText("Start Date:");
    expect(input).toHaveStyle("border: 1px solid #ddd");
  });

  test("calls onChange when the value is changed", () => {
    const input = screen.getByLabelText("Start Date:");
    fireEvent.change(input, { target: { value: "2023-03-01" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("respects the minDate property", () => {
    const input = screen.getByLabelText("Start Date:");
    expect(input).toHaveAttribute("min", "2023-01-01");
  });
});
