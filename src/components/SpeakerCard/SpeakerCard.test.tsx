import { render } from "@testing-library/react";
import { SpeakerCard } from "./SpeakerCard";

test("renders SpeakerCard", () => {
  const { getByText } = render(
    <SpeakerCard
      onChangeMode={() => {}}
      imageFallback="A"
      imageUrl=""
      name="Abraão"
      role="Developer"
      tags={["Frontend", "Convida", "Comunidade"]}
      label="Typescript morreu?"
      hour="10:00"
      isSaved={true}
    />
  );
  const element = getByText(/Typescript morreu?/i);
  expect(element).toBeInTheDocument();
});
