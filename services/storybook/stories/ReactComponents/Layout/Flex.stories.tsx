import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "@sbjang/react-components-layout/style.css";
import { Flex as _Flex } from "@sbjang/react-components-layout";

export default {
  title: "React Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof _Flex>;

type Story = StoryObj<typeof _Flex>;

export const Flex: Story = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: 300,
    },
  },
  render: (args) => {
    return (
      <_Flex {...args}>
        <div>테스트</div>
        <div>컴온!</div>
      </_Flex>
    );
  },
};
