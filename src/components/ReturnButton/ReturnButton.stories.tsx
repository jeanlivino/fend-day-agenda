import { Meta } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import { ReturnButton } from './ReturnButton';

export default {
  title: 'Components/ReturnButton',
  component: ReturnButton,
  decorators: [withRouter]
} as Meta;

export const Default = {
  parameters: {
    reactRouter: reactRouterParameters({
        routing: {
          path: '/',
          handle: 'Home Page',
        }
    })
  }
}