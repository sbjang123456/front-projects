import { UnorderedListProps } from "./types";
import { vars } from "@sbjang/themes";
import { Flex } from "./Flex";
import { Ref, forwardRef } from "react";

const UnorderedList = (
  props: UnorderedListProps,
  ref: Ref<HTMLOListElement>,
) => {
  const { listStyleType = "disc", spacing = 3, children, ...rest } = props;

  return (
    <Flex
      {...rest}
      as="ul"
      ref={ref}
      direction="column"
      style={{
        gap: vars.box.spacing[spacing],
        listStyleType: listStyleType as string,
      }}
    >
      {children}
    </Flex>
  );
};

const _UnorderedList = forwardRef(UnorderedList);
export { _UnorderedList as UnorderedList };
