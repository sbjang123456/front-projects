import { vars } from "@sbjang/themes";
import { AsElementProps, StyleProps } from "../core/types";
import { HTMLAttributes } from "react";
import { CSSProperties } from "@vanilla-extract/css";

export type BoxProps = AsElementProps & StyleProps;

export type DividerProps = {
  orientation?: "horizontal" | "vertical";
  color?: keyof typeof vars.colors.$scale;
  size?: number;
  variant?: "solid" | "dashed";
} & HTMLAttributes<HTMLHRElement>;

export type FlexProps = {
  align?: CSSProperties["alignItems"];
  basis?: CSSProperties["flexBasis"];
  direction?: CSSProperties["flexDirection"];
  grow?: CSSProperties["flexGrow"];
  justify?: CSSProperties["justifyContent"];
  shrink?: CSSProperties["flexShrink"];
  wrap?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
} & BoxProps;
