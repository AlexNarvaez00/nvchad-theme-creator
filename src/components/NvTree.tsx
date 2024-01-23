import NvTreeItem from "./NvTreeItem";

interface Props {
  folders: string;
  files: string;
  backgroundNvTree: string;
}

export default function NvTree({ folders, files, backgroundNvTree }: Props) {
  return (
    <>
      <div
        className="container-menu col-span-1 px-5"
        style={{ background: backgroundNvTree }}
      >
        <ul>
          <NvTreeItem>
            <span style={{ color: folders }}>src</span>
          </NvTreeItem>
          <NvTreeItem>
            <span style={{ color: files }}>Index.tsx</span>
          </NvTreeItem>
          <NvTreeItem>
            <span style={{ color: files }}>Nav.astro</span>
          </NvTreeItem>
          <NvTreeItem>
            <span style={{ color: files }}>Product.java</span>
          </NvTreeItem>
        </ul>
      </div>
    </>
  );
}
