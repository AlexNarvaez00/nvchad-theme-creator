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
}

export default function Nvim() {
  const [schemaState, setSchema] = useState<Schema | null>({
    backgroundEditor: `#2C3E50`,
    comments: `#566573`,
    functions: `#FFAF69`,
    folders: `#000000`,
    keywords: `#303FAF`,
    variables: `#33ff00`,
    backgroundNvTree: `#0000ff`,
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
      <div className="status-bar">
      <NvStatusBar />
      </div>
    </div>
  );
}
