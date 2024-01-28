import NvTreeItem from "./NvTreeItem";
import { NvTreeTypes } from "@/types/nvTreeTypes";
import {
  IconBrandReact,
  IconChevronRight,
  IconCoffee,
  IconFolderFilled,
  IconRocket,
} from "@tabler/icons-react";
import { useBase30 } from "@/hooks/useBase30";

interface Props extends NvTreeTypes {}

export default function NvTree({
  foregroundFolders,
  foregroundChevron,
  foregroundFiles,
  backgroundTree,
}: Props) {
  const { darker_black } = useBase30();
  return (
    <>
      <div
        className="container-menu col-span-1 px-5"
        style={{ background: darker_black }}
      >
        <ul>
          <NvTreeItem>
            <span
              className={`flex gap-1 items-center`}
              style={{ color: foregroundFolders }}
            >
              <IconChevronRight
                size={"18px"}
                className="-ml-[20px]"
                style={{ color: foregroundChevron }}
              />
              <IconFolderFilled size={"18px"} />
              src
            </span>
          </NvTreeItem>
          <NvTreeItem>
            <span
              className={`flex gap-1 items-center`}
              style={{ color: foregroundFiles }}
            >
              <IconBrandReact size={"18px"} />
              Index.tsx
            </span>
          </NvTreeItem>
          <NvTreeItem>
            <span
              className={`flex gap-1 items-center`}
              style={{ color: foregroundFiles }}
            >
              <IconRocket size={"18px"} />
              Nav.astro
            </span>
          </NvTreeItem>
          <NvTreeItem>
            <span
              className={`flex gap-1 items-center`}
              style={{ color: foregroundFiles }}
            >
              <IconCoffee size={"18px"} />
              Product.java
            </span>
          </NvTreeItem>
        </ul>
      </div>
    </>
  );
}
