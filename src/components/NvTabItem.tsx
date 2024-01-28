import { HTMLProps } from "react";
import { IconX } from "@tabler/icons-react";
import { useBase30 } from "@/hooks/useBase30";

interface Props extends HTMLProps<HTMLLIElement> {
  active?: boolean;
}
export default function NvTabItem({
  className,
  children,
  active,
  ...props
}: Props) {
  const { red, white } = useBase30();

  return (
    <li
      {...props}
      className={`flex justify-center items-center pr-3 ${className}`}
    >
      <p className="px-6">{children}</p>
      <IconX size={"16px"} style={{ color: active ? red : white }} />
    </li>
  );
}
