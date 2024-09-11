import type { Meta, StoryObj } from "@storybook/react";
import { SpeakerSection } from "./SpeakerSection";

export type Story = StoryObj<typeof SpeakerSection>;

const meta: Meta<typeof SpeakerSection> = {
  title: "Components/SpeakerSection",
  tags: ["autodocs"],
  component: SpeakerSection,
  argTypes: {
    handleCardModeChange: { action: "handleCardModeChange" },
    liveTalk: { control: "object" },
    savedCardIds: { control: undefined },
  },
} satisfies Meta<typeof SpeakerSection>;

export default meta;

export const FrontEndCE: Story = {
  args: {
    liveTalk: {
      id: 1,
      hour: "10:00",
      title: "Como se tornar um desenvolvedor Front-End",
      tags: ["Javascript", "React", "Carreira"],
      room: "Test Room",
      speaker: {
        image: "test.jpg",
        title: "Jean Livino",
        role: "CEO Hackaton",
        company: "FrontEnd CE",
        bio: "Test bio",
        social_link: "https://test.com",
        id: 1,
      },
    },
    savedCardIds: [],
  },
};

export const Comunidade: Story = {
  args: {
    liveTalk: {
      id: 1,
      hour: "11:00",
      title: "Como entrar na comunidade!",
      tags: ["Javascript", "React", "Carreira"],
      room: "Test Room",
      speaker: {
        image: "test.jpg",
        title: "Andressa Morais",
        role: "CEO Hackaton",
        company: "FrontEnd CE",
        bio: "Test bio",
        social_link: "https://test.com",
        id: 1,
      },
    },
    savedCardIds: [],
  },
};

export const Convida: Story = {
  args: {
    liveTalk: {
      id: 1,
      hour: "11:00",
      title: "Fui convidado para um evento, e agora?",
      tags: ["Javascript", "React", "Carreira"],
      room: "Test Room",
      speaker: {
        image: "test.jpg",
        title: "Bruno Oliveira",
        role: "CEO Hackaton",
        company: "FrontEnd CE",
        bio: "Test bio",
        social_link: "https://test.com",
        id: 1,
      },
    },
    savedCardIds: [],
  },
};