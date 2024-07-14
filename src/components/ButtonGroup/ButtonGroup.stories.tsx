import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ButtonGroup } from "./ButtonGroup"

export type Story = StoryObj<typeof ButtonGroup>

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  args: { onChange: fn() },
} satisfies Meta<typeof ButtonGroup>

export default meta;

export const Default: Story = {}