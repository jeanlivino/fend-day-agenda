import { render } from "@testing-library/react";
import { SpeakerCard } from "./SpeakerCard";

test("renders SpeakerCard", () => {
  const { getByText } = render(
    <SpeakerCard
      onChangeMode={() => {}}
      speaker={{
        title: "Abraão",
        role: "Developer",
        company: "FrontEnd CE",
        image: "",
        keynote: false,
        bio: "Test bio",
        social_link: "https://test.com",
        id: 1,
      }}
      tags={["Frontend", "Convida", "Comunidade"]}
      label="Typescript morreu?"
      hour="10:00"
      isSaved={true}
    />
  );
  const element = getByText(/Typescript morreu?/i);
  expect(element).toBeInTheDocument();
});
