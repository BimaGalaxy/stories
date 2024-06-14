import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Atomic/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "success", "warning", "danger"],
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
    },
    onClick: { action: "clicked" },
  },
  args: {
    variant: "primary",
    size: "medium",
    label: "Button",
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    label: "Primary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "medium",
    label: "Success Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    size: "medium",
    label: "Warning Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "medium",
    label: "Danger Button",
  },
};