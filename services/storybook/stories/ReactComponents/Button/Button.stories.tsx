import "@sbjang/react-components-button/style.css";
import { Button as _Button } from "@sbjang/react-components-button";
import type { Meta, StoryObj } from "@storybook/react";
import { vars } from "@sbjang/themes";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
} as Meta<typeof _Button>;

type Story = StoryObj<typeof _Button>;
export const ButtonStory: Story = {
  args: {
    children: "button",
    size: "lg",
    variant: "outline",
    isDisabled: true,
  },
};
