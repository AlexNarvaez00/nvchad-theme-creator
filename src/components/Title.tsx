import { HTMLProps } from "react";

type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props extends HTMLProps<HTMLHeadingElement> {
  type: TitleType;
}

export const Title = ({ children, type, className,...props }: Props) => {
  if (type === "h1") return <h1 className={`text-xl font-medium leading-none${className}`} {...props} >{children}</h1>;
  if (type === "h2") return <h2 className={`text-lg font-medium leading-none${className}`}{...props}>{children}</h2>;
  if (type === "h3") return <h3 className={`text-base font-medium leading-none${className}`}{...props}>{children}</h3>;
  if (type === "h4") return <h4 className={`text-sm font-medium leading-none ${className}`}{...props}>{children}</h4>;
  if (type === "h5") return <h5 className={`${className}`}{...props}>{children}</h5>;
  if (type === "h6") return <h6 className={`${className}`}{...props}>{children}</h6>;
};
