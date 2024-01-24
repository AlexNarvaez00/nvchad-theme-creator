import { useState } from "react";
import NvTree from "./NvTree";
import NvTabs from "./NvTabs";
import NvEditor from "./NvEditor";
import NvStatusBar from "./NvStatusBar";

interface Schema {
  backgroundEditor: string;
  comments: string;
  functions: string;
  keywords: string;
  variables: string;
  //NvTree
  backgroundNvT: string;
  foregroundFoldersNvT: string;
  foregroundFilesNvT: string;
  //Status Bar
  backgroundSB: string;
  backgroundModeSB: string;
  backgroundFileNameSB: string;
  backgroundBranchSB: string;
  forendgroundLSPSB: string;
  backgroundFolderIconSB: string;
  forendgroundPerDocumentSB: string;
  //Buffers
  backgroundBF: string;
  backgroundActiveBF: string;
  backgroundInactiveBF: string;
}

export default function Nvim() {
  const [schemaState, setSchema] = useState<Schema | null>({
    backgroundEditor: `#2C3E50`,
    backgroundNvT: `#0000ff`,
    comments: `#566573`,
    functions: `#FFAF69`,
    foregroundFoldersNvT: `#000000`,
    foregroundFilesNvT: `#404041`,
    keywords: `#303FAF`,
    variables: `#33ff00`,
    backgroundSB: `#333000`,
    backgroundModeSB: `#404044`,
    backgroundFileNameSB: `#33eeff`,
    backgroundBranchSB: `#444999`,
    forendgroundLSPSB: `#121212`,
    backgroundFolderIconSB: `#ff0000`,
    forendgroundPerDocumentSB: `#66dd11`,
    backgroundBF: `#ff00ff`,
    backgroundActiveBF: `#ff5500`,
    backgroundInactiveBF: `#ff2200`,
  });

  return (
    <div className="container-nvim w-full h-screen flex flex-col py-3">
      <div className="container-tabs">
        <NvTabs
          background={`${schemaState?.backgroundBF}`}
          backgroundActive={`${schemaState?.backgroundActiveBF}`}
          backgroundInactive={`${schemaState?.backgroundInactiveBF}`}
        />
      </div>
      <section className={`w-full h-full grid grid-cols-6`}>
        <div
          className={`container-editor col-span-5 w-full min-h-full`}
          style={{ background: schemaState?.backgroundEditor }}
        >
          <NvEditor
            foregroundComments={`${schemaState?.comments}`}
            foregroundKeywords={`${schemaState?.keywords}`}
            foregroundFunctions={`${schemaState?.functions}`}
            foregroundVariables={`${schemaState?.variables}`}
          />
        </div>
        <NvTree
          foregroundFolders={`${schemaState?.foregroundFoldersNvT}`}
          foregroundFiles={`${schemaState?.foregroundFoldersNvT}`}
          background={`${schemaState?.backgroundNvT}`}
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
