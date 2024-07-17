import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";
import { action } from "@storybook/addon-actions";

export type Story = StoryObj<typeof ToggleButton>;

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
    isSaved: { control: "boolean" },
    onToggle: { action: "mode changed" },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;

export const PlusButton: Story = {
  args: {
    isSaved: true,
    onToggle: action("mode changed"),
  },
};

export const MinusButton: Story = {
  args: {
    isSaved: false,
    onToggle: action("mode changed"),
  },
};