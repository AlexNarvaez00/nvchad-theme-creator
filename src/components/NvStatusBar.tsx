import {
  IconAlignJustified,
  IconBrandReact,
  IconFolderFilled,
  IconGitBranch,
} from "@tabler/icons-react";
import { NvStatusBarTypes } from "@/types/nvStatusBarTypes";

interface Props extends NvStatusBarTypes {
  foregroundIconPer: string;
  foregroundMode: string;
}

export default function NvStatusBar({
  backgroundStatusBar,
  backgroundMode,
  backgroundFileName,
  forendgroundLSP,
  backgroundFolderIcon,
  forendgroundPerDocument,
  foregroundMode,
  foregroundIconPer,
}: Props) {
  return (
    <section
      className={`w-full flex justify-between -mt-8`}
      style={{ background: backgroundStatusBar }}
    >
      <div className={`flex gap-2`}>
        <div
          className={`mode-container font-bold px-3 uppercase rounded-xl overflow-hidden`}
          style={{ background: backgroundMode, color:foregroundMode }}
        >
          Normal
        </div>
        <div
          className={`px-3 flex gap-2 items-center rounded-xl overflow-hidden`}
          style={{ background: backgroundFileName }}
        >
          <IconBrandReact size={"17px"} /> Index.tsx
        </div>
        <div
          className={`px-3 flex gap-2 items-center rounded-xl overflow-hidden`}
        >
          <IconGitBranch size={"17px"} />
          main
        </div>
      </div>
      <div className={`flex gap-2`}>
        <div className={`px-3`} style={{ color: forendgroundLSP }}>
          LSP ~ tsserver
        </div>
        <div
          className={`pr-3 flex items-center rounded-xl overflow-hidden`}
          style={{
            background: backgroundFileName,
          }}
        >
          <span
            className="px-2 py-1 mr-2"
            style={{ background: backgroundFolderIcon }}
          >
            <IconFolderFilled size={"16px"} />
          </span>
          Folder Name
        </div>
        <div
          className={`pr-3 flex items-center rounded-xl overflow-hidden`}
          style={{
            background: backgroundFileName,
            color: forendgroundPerDocument,
          }}
        >
          <span
            className="px-2 py-1 mr-2"
            style={{ background: forendgroundPerDocument, color:foregroundIconPer }}
          >
            <IconAlignJustified size={"16px"} />
          </span>
          10%
        </div>
      </div>
    </section>
  );
}
