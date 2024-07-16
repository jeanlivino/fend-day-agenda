import type { Meta, StoryObj } from "@storybook/react";
import { Togglebutton } from "./Togglebutton";
import { action } from "@storybook/addon-actions";

export type Story = StoryObj<typeof Togglebutton>;

const meta: Meta<typeof Togglebutton> = {
  title: "Components/Togglebutton",
  component: Togglebutton,
  argTypes: {
    initialMode: { control: "boolean" },
    onModeChange: { action: "mode changed" },
  },
} satisfies Meta<typeof Togglebutton>;

export default meta;

export const PlusButton: Story = {
  args: {
    initialMode: true,
    onModeChange: action("mode changed"),
  },
};

export const MinusButton: Story = {
  args: {
    initialMode: false,
    onModeChange: action("mode changed"),
  },
};