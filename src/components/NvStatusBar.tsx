import {
  IconAlignJustified,
  IconBrandReact,
  IconFolderFilled,
  IconGitBranch,
} from "@tabler/icons-react";
import { useBase16 } from "@/hooks/useBase16";
import { useBase30 } from "@/hooks/useBase30";

interface Props {
}
export default function NvStatusBar({}: Props) {
  const { nord_blue, statusline_bg, lightbg, one_bg, green, red } = useBase30();
  const { base00 } = useBase16();

  return (
    <section
      className={`w-full flex justify-between -mt-8`}
      style={{ background: statusline_bg }}
    >
      <div className={`flex gap-2`}>
        <div
          className={`mode-container font-bold px-3 uppercase rounded-xl overflow-hidden`}
          style={{ background: nord_blue, color: base00 }}
        >
          Normal
        </div>
        <div
          className={`px-3 flex gap-2 items-center rounded-xl overflow-hidden`}
          style={{ background: lightbg }}
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
        <div className={`px-3`} style={{ color: nord_blue }}>
          LSP ~ tsserver
        </div>
        <div
          className={`pr-3 flex items-center rounded-xl overflow-hidden`}
          style={{
            background: lightbg,
          }}
        >
          <span
            className="px-2 py-1 mr-2"
            style={{ background: red, color:one_bg }}
          >
            <IconFolderFilled size={"16px"} />
          </span>
          Folder Name
        </div>
        <div
          className={`pr-3 flex items-center rounded-xl overflow-hidden`}
          style={{
            background: lightbg,
            color: green,
          }}
        >
          <span
            className="px-2 py-1 mr-2"
            style={{ background: green, color: base00 }}
          >
            <IconAlignJustified size={"16px"} />
          </span>
          10%
        </div>
      </div>
    </section>
  );
}
