import "@sbjang/react-components-button/style.css";
import "@sbjang/react-components-toast/style.css";
import { Button } from "@sbjang/react-components-button";
import { ToastProvider, useToast } from "@sbjang/react-components-toast";
import React from "react";

import "@sbjang/react-components-layout/style.css";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
};

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
};

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
