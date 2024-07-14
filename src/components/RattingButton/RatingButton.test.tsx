import { render } from "@testing-library/react";
import { RatingButton } from "./RatingButton";

test("renders RatingButton", () => {
  const { getByText } = render(<RatingButton ratingLink="https://www.frontendday.com.br/" label="Avaliar Palestra" />);
  const element = getByText(/Avaliar Palestra/i);
  expect(element).toBeInTheDocument();
});
