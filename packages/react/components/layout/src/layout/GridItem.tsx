import { Ref, createElement, forwardRef } from "react";
import { GridItemProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@sbjang/themes";

const GridItem = (props: GridItemProps, ref: Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    children,
    area,
    colEnd,
    colStart,
    colSpan,
    rowEnd,
    rowStart,
    rowSpan,
  } = props;

  return createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        gridArea: area,
        gridColumnEnd: colEnd,
        gridColumnStart: colStart,
        gridColumn: colSpan,
        gridRowEnd: rowEnd,
        gridRowStart: rowStart,
        gridRow: rowSpan,
        color: vars.colors.$scale?.[color]?.[700] ?? color,
        background: vars.colors.$scale?.[background]?.[100] ?? background,
        ...props.style,
      },
    },
    children,
  );
};

const _GridItem = forwardRef(GridItem);

export { _GridItem as GridItem };
