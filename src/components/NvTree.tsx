import NvTreeItem from "./NvTreeItem";
import {
  IconBrandReact,
  IconCoffee,
  IconFolderFilled,
  IconRocket,
} from "@tabler/icons-react";

interface Props {
  foregroundFolders: string;
  foregroundFiles: string;
  background: string;
}

export default function NvTree({ foregroundFolders, foregroundFiles, background }: Props) {
  return (
    <>
      <div
        className="container-menu col-span-1 px-5"
        style={{ background: background }}
      >
        <ul>
          <NvTreeItem>
            <span className={`flex gap-1 items-center`} style={{ color: foregroundFolders }}>
              <IconFolderFilled size={"18px"} />
              src
            </span>
          </NvTreeItem>
          <NvTreeItem>
            <span className={`flex gap-1 items-center`} style={{ color: foregroundFiles }}>
              <IconBrandReact size={"18px"} />
              Index.tsx
            </span>
          </NvTreeItem>
          <NvTreeItem>
            <span className={`flex gap-1 items-center`} style={{ color: foregroundFiles }}>
              <IconRocket size={"18px"} />
              Nav.astro
            </span>
          </NvTreeItem>
          <NvTreeItem>
            <span className={`flex gap-1 items-center`} style={{ color: foregroundFiles }}>
              <IconCoffee size={"18px"} />
              Product.java
            </span>
          </NvTreeItem>
        </ul>
      </div>
    </>
  );
}
