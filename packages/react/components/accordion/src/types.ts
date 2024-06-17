import { HTMLAttributes, ReactNode } from "react";

export type AccordionProps = {
  defaultActiveItems?: string[];
  children: ReactNode | ReactNode[];
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export type AccordionItemProps = {
  children: ReactNode[];
  itemName: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export type AccordionButtonProps = {
    itemName?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
  
  export type AccordionPanelProps = {
    itemName?: string;
  } & React.HTMLAttributes<HTMLDivElement>;
  