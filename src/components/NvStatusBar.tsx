import { IconBrandReact, IconFolderFilled } from "@tabler/icons-react";
import { NvStatusBarTypes } from "@/types/nvStatusBarTypes";

interface Props extends NvStatusBarTypes {}

export default function NvStatusBar({
  background,
  backgroundMode,
  backgroundFileName,
  backgroundBranch,
  forendgroundLSP,
  backgroundFolderIcon,
  forendgroundPerDocument,
}: Props) {
  return (
    <section
      className={`w-full flex justify-between -mt-8`}
      style={{ background }}
    >
      <div className={`flex`}>
        <div
          className={`mode-container px-3 uppercase`}
          style={{ background: backgroundMode }}
        >
          Normal
        </div>
        <div
          className={`px-3 flex gap-2 items-center`}
          style={{ background: backgroundFileName }}
        >
          <IconBrandReact size={"18px"} /> Index.tsx
        </div>
        <div className={`px-3`} style={{ background: backgroundBranch }}>
          main
        </div>
      </div>
      <div className={`flex`}>
        <div className={`px-3`} style={{ color: forendgroundLSP }}>
          LSP ~ tsserver
        </div>
        <div
          className={`px-3 flex items-center`}
          style={{
            background: backgroundFileName,
          }}
        >
          <span className="px-2 py-1" style={{ background: backgroundFolderIcon }}>
            <IconFolderFilled size={"18px"}/>
          </span>
          Folder Name
        </div>
        <div
          className={`px-3`}
          style={{
            background: backgroundFileName,
            color: forendgroundPerDocument,
          }}
        >
          10%
        </div>
      </div>
    </section>
  );
}
