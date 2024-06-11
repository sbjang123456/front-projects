import { clsx } from "clsx";
import { Ref, createElement, forwardRef } from "react";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@sbjang/themes";
import { HeadingProps } from "./types";
import { headingStyle } from "./style.css";

const Heading = (props: HeadingProps, ref: Ref<HTMLElement>) => {
  const { as = "h1", color = "gray", background, fontSize, children } = props;

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
        headingStyle({ fontSize }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Heading = forwardRef(Heading);
export { _Heading as Heading };
