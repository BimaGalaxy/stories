import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Toast } from './toast';

const meta = {
  title: "Molecule/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: "default",
    label: 'Change label',
    message: 'Change message'
  },
};

export const Success: Story = {
  args: {
    size: 'medium',
    variant: "success",
    label: 'Change label',
    message: 'Change message'
  },
};

export const Danger: Story = {
  args: {
    size: 'medium',
    variant: "danger",
    label: 'Change label',
    message: 'Change message'
  },
};

export const Notification: Story = {
  args: {
    size: 'medium',
    variant: "notification",
    label: 'Change label',
    message: 'Change Notification'
  },
};


// export const Information: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;
// // Define default arguments for the Default StoryObj
// Information.args = {
//     type: 'information',
//     label: "Change label",
//     message: "Change message"
// };