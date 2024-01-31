import NvTabItem from "./NvTabItem";
import { useBase16 } from "@/hooks/useBase16";
import { useBase30 } from "@/hooks/useBase30";
import { IconToggleRight, IconX } from "@tabler/icons-react";

interface Props {}

export default function NvTabs({}: Props) {
  const { black2, red, one_bg3, white, black } = useBase30();
  const { base00 } = useBase16();

  return (
    <>
      <ul className={`flex w-full`} style={{ background: black2 }}>
        <NvTabItem active={true} style={{ background: black }}>
          Index.tsx
        </NvTabItem>
        <NvTabItem style={{ background: black2 }}>Nav.astro</NvTabItem>
        <NvTabItem style={{ background: black2 }}>Product.java</NvTabItem>
      </ul>
      <div className="w-auto flex">
        <span
          className="flex px-2 items-center justify-center"
          style={{ background: one_bg3, color: white }}
        >
          <IconToggleRight size={"25px"} />
        </span>
        <span
          className="flex p-1 items-center justify-center"
          style={{ color: base00, background: red }}
        >
          <IconX size={"15px"} />
        </span>
      </div>
    </>
  );
}
