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
    imageFallback: { control: "text" },
    imageUrl: { control: "text" },
    name: { control: "text" },
    role: { control: "text" },
    onChangeMode: { action: "mode changed" },
  },
} satisfies Meta<typeof SpeakerCard>;

export default meta;

export const Default: Story = {
  args: {
    label: "Typescript morreu?!",
    tags: ["Frontend", "Convida", "Comunidade"],
    imageFallback: "A",
    imageUrl: "",
    name: "Abraão",
    role: "Developer",
  },
};
