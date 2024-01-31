import NvTreeDir from "./NvTreeDir";
import NvTreeItem from "./NvTreeItem";
import {
  IconBrandReact,
  IconFileTypeJs,
  IconFileTypeTs,
  IconFileTypeHtml
} from "@tabler/icons-react";
import { useBase30 } from "@/hooks/useBase30";

interface Props {}

export default function NvTree({}: Props) {
  const { darker_black, baby_pink ,black2, line, yellow, teal, blue } = useBase30();

  return (
    <div
      className="container-menu col-span-1 pl-3 relative"
      style={{ background: darker_black }}
    >
      <span
        className="absolute w-[2px] h-full top-0 left-[-6px]"
        style={{ background: line }}
      >
      </span>
      <NvTreeDir title="src" open>
        <NvTreeDir
          title="components"
          open
          active={true}
          style={{ background: black2 }}
        >
          <NvTreeItem>
            <IconBrandReact
              size={"16px"}
              style={{ color: blue }}
              className="inline-block"
            />{" "}
            Card.tsx
          </NvTreeItem>
        </NvTreeDir>
        <NvTreeDir title="hooks"></NvTreeDir>
        <NvTreeDir title="store"></NvTreeDir>
        <NvTreeDir title="pages"></NvTreeDir>
        <NvTreeItem newFile={yellow}>
          <IconBrandReact
            size={"16px"}
            style={{ color: blue }}
            className="inline-block"
          />{" "}
          App.tsx
        </NvTreeItem>
        <NvTreeItem>
          <IconBrandReact
            size={"16px"}
            style={{ color: blue }}
            className="inline-block"
          />{" "}
          index.tsx
        </NvTreeItem>
        <NvTreeItem>
          <IconFileTypeJs
            size={"16px"}
            className="inline-block"
            style={{ color: yellow }}
          />{" "}
          index.js
        </NvTreeItem>
        <NvTreeItem>
          <IconFileTypeTs
            size={"16px"}
            className="inline-block"
            style={{ color: teal }}
          />{" "}
          index.ts
        </NvTreeItem>
        <NvTreeItem>
          <IconFileTypeHtml
            size={"16px"}
            className="inline-block"
            style={{ color: baby_pink }}
          />{" "}
          index.html
        </NvTreeItem>
      </NvTreeDir>
    </div>
  );
}
