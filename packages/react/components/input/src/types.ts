import { UseInputProps } from "@sbjang/react-hooks-input";
import { vars } from "@sbjang/themes";

type Size = "lg" | "md" | "sm" | "xs";
type Color = keyof typeof vars.colors.$scale;

export type InputProps = UseInputProps & {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
};
