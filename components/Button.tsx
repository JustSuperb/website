import { FC } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  href?: string;
  component?: "a";
  variant?: "text";
};

const Button: FC<Props> = ({ children, className, component, variant, ...restProps }) => {
  const Component = component || "button";

  return (
    <Component
      className={clsx(
        "block py-2 px-4 text-sm rounded-md font-normal transition",
        variant === "text" ? "text-primary-700 hover:bg-primary-100" : "bg-primary-600 text-white hover:opacity-75",
        className
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export default Button;
