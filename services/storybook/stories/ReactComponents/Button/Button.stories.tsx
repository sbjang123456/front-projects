import React from "react";
import "@sbjang/react-components-button/style.css";
import { Button as _Button } from "@sbjang/react-components-button";
import { Text } from "@sbjang/react-components-layout";
import { useButton } from "@sbjang/react-hooks-button";
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
    isDisabled: false,
    isLoading: false,
    leftIcon: "😃",
  },
};

export const TextButtonStory: Story = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("clicked");
      },
    });
    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        텍스트 버튼입니다.
      </Text>
    );
  },
};
