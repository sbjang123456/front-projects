import { Ref, createElement, forwardRef } from "react";
import { TextProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@sbjang/themes";
import { textStyle } from "./style.css";

const Text = (props: TextProps, ref: Ref<HTMLElement>) => {
  const { as = "p", color = "gray", background, fontSize, children } = props;

  return createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({ fontSize }),
        props.className,
      ]),
      style: {
        color: vars.colors.$scale?.[color]?.[700] ?? color,
        background: vars.colors.$scale?.[background]?.[100] ?? background,
        ...props.style,
      },
    },
    children,
  );
};

const _Text = forwardRef(Text);

export { _Text as Text };
