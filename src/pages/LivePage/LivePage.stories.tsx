import type { Meta, StoryObj } from "@storybook/react";
import { LivePage } from ".";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Story } from "@storybook/blocks";

export type Story = StoryObj<typeof LivePage>;

const queryClient = new QueryClient();

const meta: Meta<typeof LivePage> = {
  title: "Pages/Live Page",
  tags: ["autodocs"],
  component: LivePage,
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
