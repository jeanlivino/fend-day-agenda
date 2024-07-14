import type { Meta, StoryObj } from '@storybook/react';
import { TestButton } from "./TestButton"

export type Story = StoryObj<typeof TestButton>

const meta: Meta<typeof TestButton> = {
  title: 'Components/TestButton',
  component: TestButton,
} satisfies Meta<typeof TestButton>

export default meta;

export const Default: Story = {}