import { useState } from "react";
import NvTree from "./NvTree";
import NvTabs from "./NvTabs";
import NvEditor from "./NvEditor";
import NvStatusBar from "./NvStatusBar";

interface Schema {
  backgroundEditor: string;
  comments: string;
  functions: string;
  folders: string;
  keywords: string;
  variables: string;
  backgroundNvTree: string;
  //Status Bar
  backgroundSB: string;
  backgroundModeSB: string;
  backgroundFileNameSB: string;
  backgroundBranchSB: string;
  forendgroundLSPSB: string;
  backgroundFolderIconSB: string;
  forendgroundPerDocumentSB: string;
}

export default function Nvim() {
  const [schemaState, setSchema] = useState<Schema | null>({
    backgroundEditor: `#2C3E50`,
    backgroundNvTree: `#0000ff`,
    comments: `#566573`,
    functions: `#FFAF69`,
    folders: `#000000`,
    keywords: `#303FAF`,
    variables: `#33ff00`,
    backgroundSB: `#333000`,
    backgroundModeSB: `#404044`,
    backgroundFileNameSB: `#33eeff`,
    backgroundBranchSB: `#444999`,
    forendgroundLSPSB: `#121212`,
    backgroundFolderIconSB: `#ff0000`,
    forendgroundPerDocumentSB: `#66dd11`,
  });

  return (
    <div className="container-nvim w-full flex flex-col py-5">
      <div className="container-tabs">
        <NvTabs />
      </div>
      <section className={`w-full grid grid-cols-6`}>
        <div
          className={`container-editor col-span-5 w-full min-h-full`}
          style={{ background: schemaState?.backgroundEditor }}
        >
          <NvEditor
            comments={`${schemaState?.comments}`}
            keywords={`${schemaState?.keywords}`}
            functions={`${schemaState?.functions}`}
            variables={`${schemaState?.variables}`}
          />
        </div>
        <NvTree
          folders={`${schemaState?.folders}`}
          files={``}
          backgroundNvTree={`${schemaState?.backgroundNvTree}`}
        />
      </section>
      <div className="status-bar w-full">
        <NvStatusBar
          background={`${schemaState?.backgroundSB}`}
          backgroundMode={`${schemaState?.backgroundModeSB}`}
          backgroundFileName={`${schemaState?.backgroundFileNameSB}`}
          backgroundBranch={`${schemaState?.backgroundBranchSB}`}
          forendgroundLSP={`${schemaState?.forendgroundLSPSB}`}
          backgroundFolderIcon={`${schemaState?.backgroundFolderIconSB}`}
          forendgroundPerDocument={`${schemaState?.forendgroundPerDocumentSB}`}
        />
      </div>
    </div>
  );
}
