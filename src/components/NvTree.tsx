import NvTreeDir from "./NvTreeDir";
import NvTreeItem from "./NvTreeItem";
import { IconBrandReact } from "@tabler/icons-react";
import { useBase30 } from "@/hooks/useBase30";

interface Props {}

export default function NvTree({}: Props) {
  const { darker_black, black2 } = useBase30();

  return (
    <div
      className="container-menu col-span-1 pl-3"
      style={{ background: darker_black }}
    >
      <NvTreeDir title="src" open>
        <NvTreeDir
          title="components"
          open
          active={true}
          style={{ background: black2 }}
        >
          <NvTreeItem>
            <IconBrandReact size={"16px"} className="inline-block" /> Card.tsx
          </NvTreeItem>
        </NvTreeDir>
        <NvTreeDir title="hooks"></NvTreeDir>
        <NvTreeDir title="store"></NvTreeDir>
        <NvTreeDir title="pages"></NvTreeDir>
        <NvTreeItem>
          <IconBrandReact size={"16px"} className="inline-block" /> App.tsx
        </NvTreeItem>
        <NvTreeItem>
          <IconBrandReact size={"16px"} className="inline-block" /> index.tsx
        </NvTreeItem>
      </NvTreeDir>
    </div>
  );
}
