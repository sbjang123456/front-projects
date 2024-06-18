import { InputGroupProps } from "./types";
import {
  CSSProperties,
  Children,
  Ref,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";
import { clsx } from "clsx";
import { inputGroupStyle } from "./style.css";

const InputGroup = (props: InputGroupProps, ref: Ref<HTMLDivElement>) => {
  const { children, className, color = "gray", size = "md", ...rest } = props;

  const childrenWithProps = Children.toArray(children);

  const inputStyle: CSSProperties = {};

  childrenWithProps.forEach((child) => {
    // @ts-ignore
    if (child.type.displayName === "InputLeftAddon") {
      inputStyle.borderStartStartRadius = 0;
      inputStyle.borderEndStartRadius = 0;
    }
    // @ts-ignore
    if (child.type.displayName === "InputRightAddon") {
      inputStyle.borderStartEndRadius = 0;
      inputStyle.borderEndEndRadius = 0;
    }
  });

  const inputGroupChildren = childrenWithProps.map((child) => {
    if (isValidElement(child)) {
      // AddonLeft이 들어오면 Input 의 왼쪽 상단, 왼쪽 하단의 BorderRadius를 0으로 만들어준다.

      // @ts-ignore
      if (child.type.displayName === "Input") {
        return cloneElement(child, {
          ...child.props,
          color,
          size,
          style: {
            ...child.props.style,
            ...inputStyle,
          },
        });
      }

      return cloneElement(child, { ...child.props, color, size });
    }

    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([inputGroupStyle, className])}>
      {inputGroupChildren}
    </div>
  );
};

const _InputGroup = forwardRef(InputGroup);
export { _InputGroup as InputGroup };
