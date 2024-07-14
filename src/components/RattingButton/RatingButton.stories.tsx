import type { Meta, StoryObj } from "@storybook/react";
import { RatingButton } from "./RatingButton";

export type Story = StoryObj<typeof RatingButton>;

const meta: Meta<typeof RatingButton> = {
  title: "Components/RatingButton",
  component: RatingButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: {
        label: "text",
      },
      ratingLink: {
        control: {
          label: "text",
        },
      },
    },
  },
} satisfies Meta<typeof RatingButton>;

export default meta;

export const Default: Story = {
  args: {
    label: "Avaliar Palestra",
    ratingLink: "https://www.frontendday.com.br/",
  },
};
