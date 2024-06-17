import { Ref, forwardRef, useState } from "react";
import { AccordionProps } from "./types";
import AccordionContext from "./AccordionContext";
import { clsx } from "clsx";
import { accordionStyle } from "./style.css";

const Accordion = (props: AccordionProps, ref: Ref<HTMLDivElement>) => {
  const { defaultActiveItems = [], children, className, ...rest } = props;

  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleActiveItems = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItem) => activeItem !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ activeItems, setActiveItem: handleActiveItems }}
    >
      <div {...rest} ref={ref} className={clsx([accordionStyle, className])}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const _Accordion = forwardRef(Accordion);

export { _Accordion as Accordion };
