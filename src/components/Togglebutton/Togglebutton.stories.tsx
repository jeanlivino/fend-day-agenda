import type { Meta, StoryObj } from '@storybook/react';
import { Togglebutton } from "./Togglebutton"

export type Story = StoryObj<typeof Togglebutton>

const meta: Meta<typeof Togglebutton> = {
  title: 'Components/Togglebutton',
  component: Togglebutton,
} satisfies Meta<typeof Togglebutton>

export default meta;

export const Default: Story = {}

export const PlusButton: Story = {
  args: {
    mode: true
  }
};

export const MinusButton: Story = {
  args: {
    mode: false
  }
};