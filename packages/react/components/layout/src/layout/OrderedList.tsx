import { OrderedListProps } from "./types";
import { vars } from "@sbjang/themes";
import { Flex } from "./Flex";
import { Ref, forwardRef } from "react";

const OrderedList = (
  props: OrderedListProps,
  ref: Ref<HTMLOListElement>,
) => {
  const { spacing = 3, children, ...rest } = props;

  return (
    <Flex
      {...rest}
      as="ol"
      ref={ref}
      direction="column"
      style={{ gap: vars.box.spacing[spacing], listStyleType: "decimal" }}
    >
      {children}
    </Flex>
  );
};

const _OrderedList = forwardRef(OrderedList);
export { _OrderedList as OrderedList };
