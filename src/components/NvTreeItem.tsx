import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
export default function NvTreeItem({ children, className, ...props }: Props) {
  return (
    <li className={`px-3 flex gap-2 ${className}`} {...props}>
      {children}
    </li>
  );
}
