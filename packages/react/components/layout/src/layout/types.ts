import { vars } from "@sbjang/themes";
import { AsElementProps, StyleProps } from "../core/types";
import { HTMLAttributes } from "react";

export type BoxProps = AsElementProps & StyleProps;

export type DividerProps = {
  orientation?: "horizontal" | "vertical";
  color?: keyof typeof vars.colors.$scale;
  size?: number;
  variant?: "solid" | "dashed";
} & HTMLAttributes<HTMLHRElement>;
