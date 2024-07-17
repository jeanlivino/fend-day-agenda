import type { Preview } from "@storybook/react";
import "../src/index.css";
import "./themes.css"

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0f0f0f',
        },
      ],
    },
  },
  decorators: [withThemeByClassName({
    themes: {
      light: 'theme-light',
      dark: 'theme-dark',
    },
    defaultTheme: 'dark',
  })]
};

export default preview;