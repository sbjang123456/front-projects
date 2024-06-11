import { Ref, forwardRef } from "react";
import { DividerProps } from "./types";
import { vars } from "@sbjang/themes";

const Divider = (props: DividerProps, ref: Ref<HTMLHRElement>) => {
  const {
    color = "gray",
    variant = "solid",
    size = 1,
    orientation = "horizontal",
  } = props;

  const borderStyle =
    orientation === "horizontal"
      ? {
          width: "100%",
          borderWidth: `0 0 ${size} 0`,
        }
      : {
          height: "100%",
          borderWidth: `0 0 0 ${size}`,
        };

  return (
    <hr
      {...props}
      ref={ref}
      style={{
        borderStyle: variant,
        borderColor: vars.colors.$scale?.[color]?.[200] ?? color,
        ...borderStyle,
        ...props.style,
      }}
    />
  );
};

const _Divider = forwardRef(Divider);

export { _Divider as Divider };
