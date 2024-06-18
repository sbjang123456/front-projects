import { vars } from "@sbjang/themes";
import { inputRightAddonStyle } from "./style.css";
import { InputRightAddonProps } from "./types";
import { clsx } from "clsx";

const InputRightAddon = (props: InputRightAddonProps) => {
  const { size = "md", color = "gray", children } = props;

  return (
    <div
      className={clsx([
        inputRightAddonStyle({
          size,
        }),
      ])}
      style={{ color: vars.colors.$scale[color][900] }}
    >
      {children}
    </div>
  );
};

InputRightAddon.displayName = "InputRightAddon";
export { InputRightAddon };
