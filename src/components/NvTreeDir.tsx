import { ReactNode, HTMLProps } from "react";
import { IconFolderFilled } from "@tabler/icons-react";
import { useBase30 } from "@/hooks/useBase30";
interface Props extends HTMLProps<HTMLDetailsElement>{
  children?: ReactNode;
  title: string;
  className?: string;
  active?: boolean
}
export default function NvTreeDir({
  children,
  title,
  className,
  active = false,
  ...props
}: Props) {
  const { folder_bg , darker_black } = useBase30();

  return (
    <details className={` ${className}`} {...props}>
      <summary style={{ color: folder_bg }}>
        <IconFolderFilled size={"16px"} className="inline-block" />
        {` ${title}`}
      </summary>
      <ul className="pl-5" style={{background: darker_black}} >{children}</ul>
    </details>
  );
}
