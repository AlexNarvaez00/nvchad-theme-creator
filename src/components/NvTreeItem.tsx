import { HTMLProps, ReactNode } from "react";
interface Props extends HTMLProps<HTMLLIElement> {
  children?: ReactNode;
  newFile?: string;
}

export default function NvTreeItem({ children, newFile, style,...props }: Props) {
  return <li {...props}  style={{...style,color:newFile }}>{children}</li>;
}
