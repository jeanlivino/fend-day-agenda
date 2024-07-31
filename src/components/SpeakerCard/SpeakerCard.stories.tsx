import type { Meta, StoryObj } from "@storybook/react";
import { SpeakerCard } from "./SpeakerCard";

export type Story = StoryObj<typeof SpeakerCard>;

const meta: Meta<typeof SpeakerCard> = {
  title: "Components/SpeakerCard",
  component: SpeakerCard,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    tags: { control: "object" },
    onChangeMode: { action: "mode changed" },
    hour: { control: "text" },
    speaker: { control: "object" },
    showRoom: { control: "boolean" },
    room: { control: "text" },
    isSaved: { control: "boolean" },
  },
} satisfies Meta<typeof SpeakerCard>;

export default meta;

export const Default: Story = {
  args: {
    label: "Typescript morreu?!",
    tags: ["Frontend", "Convida", "Comunidade"],
    hour: "10:00",
    speaker: {
      title: "Abraão",
      role: "Developer",
      company: "FrontEnd CE",
      image: "",
      keynote: false,
      bio: "Test bio",
      social_link: "https://test.com",
      id: 1,
    },
    showRoom: false,
    room: "Test Room",
    isSaved: true,
  },
};
