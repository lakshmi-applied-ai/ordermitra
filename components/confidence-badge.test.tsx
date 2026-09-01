import { render, screen } from "@testing-library/react";
import { ConfidenceBadge } from "./confidence-badge";

test("high renders the high label in green", () => {
  render(<ConfidenceBadge level="high" />);

  expect(screen.getByText("High confidence")).toHaveClass("badge-green");
});

test("medium renders the medium label in amber", () => {
  render(<ConfidenceBadge level="medium" />);

  expect(screen.getByText("Medium confidence")).toHaveClass("badge-amber");
});

test("low renders the low label in red", () => {
  render(<ConfidenceBadge level="low" />);

  expect(screen.getByText("Low confidence")).toHaveClass("badge-red");
});
