import type { Meta, StoryObj } from '@storybook/react';
import { DeadComponent } from "./DeadComponent"

export type Story = StoryObj<typeof DeadComponent>

const meta: Meta<typeof DeadComponent> = {
  title: 'Components/DeadComponent',
  component: DeadComponent,
  argTypes: {
    title: {
      control: {
        type: 'text',
      }, 
    },
    hours: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof DeadComponent>

export default meta;

export const Default: Story = {
  args: {
    title: 'Dead Component',
    hours: '12',
  },
}