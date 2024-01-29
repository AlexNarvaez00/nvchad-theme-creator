import { ReactNode } from "react";

interface Props {
  number: Number;
  color: string;
  children: ReactNode;
}

export const Line = ({ children, number, color }: Props) => {
  return (
    <li>
      <span className="mr-2" style={{ color: color }}>{`${number}`}</span>
      {children}
    </li>
  );
};
