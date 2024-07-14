import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";

export type Story = StoryObj<typeof ProfileCard>;

const meta: Meta<typeof ProfileCard> = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  argTypes: {
    imageUrl: { control: "text" },
    imageFallback: { control: "text" },
    name: { control: "text" },
    role: { control: "text" },
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;

export const Default: Story = {
  args: {
    imageUrl: "https://avatars.githubusercontent.com/u/3055950?v=4",
    imageFallback: "JD",
    name: "John Doe",
    role: "Software Engineer",
  },
};
