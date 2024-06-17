import { ListItemProps } from "./types";
import { Text } from "../typography";
import { Ref, forwardRef } from "react";

const ListItem = (props: ListItemProps, ref: Ref<HTMLLIElement>) => {
  return <Text {...props} ref={ref} as="li" />;
};

const _ListItem = forwardRef(ListItem);
export { _ListItem as ListItem };
