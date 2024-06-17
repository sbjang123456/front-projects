import { AccordionButtonProps } from "./types";
import { clsx } from "clsx";
import { accordionButtonStyle } from "./style.css";
import { useButton } from "@sbjang/react-hooks-button";
import { useAccordionContext } from "./AccordionContext";
import { MouseEvent, Ref, forwardRef, useCallback } from "react";

const AccordionButton = (
  props: AccordionButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  const { className, itemName = "", onClick, children, ...rest } = props;

  const { setActiveItem } = useAccordionContext();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setActiveItem(itemName);
      onClick?.(event);
    },
    [itemName, setActiveItem, onClick],
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([accordionButtonStyle, className])}
    >
      {children}
    </button>
  );
};

const _AccordionButton = forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };
