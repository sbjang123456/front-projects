import { UseInputProps } from "@sbjang/react-hooks-input";
import { vars } from "@sbjang/themes";
import { HTMLAttributes, ReactNode } from "react";

type Size = "lg" | "md" | "sm" | "xs";
type Color = keyof typeof vars.colors.$scale;

export type InputProps = UseInputProps & {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
};

export type InputGroupProps = {
  color?: Color;
  size?: Size;
  children: ReactNode[];
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export type InputLeftAddonProps = {
  color?: Color;
  size?: Size;
  children: ReactNode;
};

export type InputRightAddonProps = InputLeftAddonProps;