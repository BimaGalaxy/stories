import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Toast } from './toast';
import { fn } from "@storybook/test";

const meta = {
  title: "Molecule/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ['success', 'danger', 'default'],
      description: "Color",
    },
    size: {
      control: {
        type: "select",

      },
      options: ['medium', 'large'],
      description: "Size",
    },
    variant: {
      control: {
        type: "select",

      },
      options: ['default','success','danger','notification'],
      description: "Variant of the alert",
    },
  },
  args: {
    color: "default",
    variant: "default",
    size: "medium",
    onClick: fn(),
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
