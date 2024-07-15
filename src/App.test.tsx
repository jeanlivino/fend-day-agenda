import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Routing Test", () => {
  it("Check Home Route", () => {
    render(<App />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
