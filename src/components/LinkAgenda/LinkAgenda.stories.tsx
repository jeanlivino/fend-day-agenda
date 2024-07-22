import { BrowserRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';
import { LinkAgenda } from "./LinkAgenda"

export type Story = StoryObj<typeof LinkAgenda>

const meta: Meta<typeof LinkAgenda> = {
  title: 'Components/LinkAgenda',
  component: LinkAgenda,
  decorators: [(Story) => <BrowserRouter><Story/></BrowserRouter>],
} satisfies Meta<typeof LinkAgenda>

export default meta;

export const Default: Story = {}