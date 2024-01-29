import NvEditor from "./NvEditor";
import NvStatusBar from "./NvStatusBar";
import NvTabs from "./NvTabs";
import NvTree from "./NvTree";
import useColors from "@/hooks/useColors";

export default function Nvim() {
  const { state } = useColors();

  return (
    <div className="container-nvim w-full h-screen flex flex-col py-3">
      <div className="container-tabs flex justify-between items-center">
        <NvTabs />
      </div>
      <section className={`w-full h-[96%] grid grid-cols-6`}>
        <div
          className={`container-editor col-span-5 w-full min-h-full overflow-auto`}
          style={{ background: state.background }}
        >
          <NvEditor />
        </div>
        <NvTree />
      </section>
      <div className="status-bar w-full z-50">
        <NvStatusBar />
      </div>
    </div>
  );
}
