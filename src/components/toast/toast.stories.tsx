import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Toast, ToastProps } from './toast';

export default {
  title: 'Atoms/Toast',
  component: Toast,
  argTypes: {
    type: { control: 'select' }
  }
} as Meta;

export const Information: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;
// Define default arguments for the Default StoryObj
Information.args = {
    type: 'information',
    message: "Change message"
};

export const Notification: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;
// Define default arguments for the Default StoryObj
Notification.args = {
    type: 'notification',
    message: "Change Notification"
};