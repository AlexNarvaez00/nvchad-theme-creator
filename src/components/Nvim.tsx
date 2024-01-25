import NvEditor from "./NvEditor";
import NvStatusBar from "./NvStatusBar";
import NvTabs from "./NvTabs";
import NvTree from "./NvTree";
import useColors from "@/hoooks/useColors";

export default function Nvim() {
  const { state } = useColors();

  return (
    <div className="container-nvim w-full h-screen flex flex-col py-3">
      <div className="container-tabs">
        <NvTabs
          backgroundTabs={`${state.backgroundTabs}`}
          backgroundActive={`${state.background}`}
          backgroundInactive={`${state.backgroundTabs}`}
        />
      </div>
      <section className={`w-full h-full grid grid-cols-6`}>
        <div
          className={`container-editor col-span-5 w-full min-h-full`}
          style={{ background: state.background }}
        >
          <NvEditor
            foregroundComments={`${state.foregroundComments}`}
            foregroundKeywords={`${state.foregroundKeywords}`}
            foregroundFunctions={`${state.foregroundFunctions}`}
            foregroundVariables={`${state.foregroundVariables}`}
            foregroundOperators={`${state.foregroundOperators}`}
            foregroundString={`${state.foregroundString}`}
          />
        </div>
        <NvTree
          foregroundFolders={`${state.foregroundFolders}`}
          foregroundFiles={`${state.foregroundFiles}`}
          backgroundTree={`${state.backgroundTree}`}
        />
      </section>
      <div className="status-bar w-full">
        <NvStatusBar
          background={`${state.background}`}
          backgroundMode={`${state.backgroundMode}`}
          backgroundFileName={`${state.backgroundFileName}`}
          backgroundBranch={`${state.backgroundBranch}`}
          forendgroundLSP={`${state.forendgroundLSP}`}
          backgroundFolderIcon={`${state.backgroundFolderIcon}`}
          forendgroundPerDocument={`${state.forendgroundPerDocument}`}
        />
      </div>
    </div>
  );
}
