import type { Meta, StoryObj } from "@storybook/react";
import { MyAgenda } from ".";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Story } from "@storybook/blocks";

export type Story = StoryObj<typeof MyAgenda>;

const queryClient = new QueryClient();

const meta: Meta<typeof MyAgenda> = {
  title: "Pages/My Agenda",
  tags: ["autodocs"],
  component: MyAgenda,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

export const Default: Story = {};