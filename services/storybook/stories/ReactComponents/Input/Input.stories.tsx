import React from "react";
import "@sbjang/react-components-input/style.css";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@sbjang/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input placeholder="dd" />,
};

export const InputGroupLeftAddOnStory = {
  render: () => (
    <InputGroup size="lg" color="red">
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="dd" />
    </InputGroup>
  ),
};

export const InputGroupRightAddOnStory = {
  render: () => (
    <InputGroup size="lg" color="red">
      <Input placeholder="dd" />
      <InputRightAddon>$</InputRightAddon>
    </InputGroup>
  ),
};

export const InputGroupAllAddOnStory = {
  render: () => (
    <InputGroup size="lg" color="red">
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="dd" />
      <InputRightAddon>$</InputRightAddon>
    </InputGroup>
  ),
};

export const InputVariantFilledStory = {
  render: () => <Input variant="filled" placeholder="dd" />,
};

export const InputFocusVisibleState = {
  render: () => <Input />,
  parameters: {
    pseudo: { focusVisible: true },
  },
};
