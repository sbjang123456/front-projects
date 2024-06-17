import { Children, Ref, cloneElement, forwardRef, isValidElement } from "react";
import { AccordionItemProps } from "./types";
import { clsx } from "clsx";
import { accordionItemStyle } from "./style.css";

const AccordionItem = (props: AccordionItemProps, ref: Ref<HTMLDivElement>) => {
  const { itemName, children, className, ...rest } = props;

  const accordionItemChildren = Children.toArray(children).map((child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...child.props, itemName });
    }
    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([accordionItemStyle, className])}>
      {accordionItemChildren}
    </div>
  );
};

const _AccordionItem = forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };
