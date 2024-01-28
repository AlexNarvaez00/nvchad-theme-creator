import { HTMLProps, ReactNode } from "react";
interface Props extends HTMLProps<HTMLLIElement> {
  children?: ReactNode;
}

export default function NvTreeItem({ children, ...props }: Props) {
  
  return <li {...props} >{children}</li>;
}
