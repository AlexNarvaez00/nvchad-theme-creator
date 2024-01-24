interface Props {
  background: string;
  backgroundMode: string;
  backgroundFileName: string;
  backgroundBranch: string;
  forendgroundLSP: string;
  backgroundFolderIcon: string;
  forendgroundPerDocument: string;
}

export default function NvStatusBar(
  {
    background,
    backgroundMode,
    backgroundFileName,
    backgroundBranch,
    forendgroundLSP,
    backgroundFolderIcon,
    forendgroundPerDocument,
  }: Props,
) {
  return (
    <section className={`w-full flex justify-between -mt-8`} style={{ background }}>
      <div className={`flex`}>
        <div className={`mode-container px-3 uppercase`} style={{background:backgroundMode}}>Normal</div>
        <div className={`px-3`}style={{background:backgroundFileName}}>Index.tsx</div>
        <div className={`px-3`}style={{background:backgroundBranch}}>main</div>
      </div>
      <div className={`flex`}>
        <div className={`px-3`}style={{background:forendgroundLSP}}>LSP ~ tsserver</div>
        <div className={`px-3`}style={{background:backgroundFolderIcon}}>Folder Name</div>
        <div className={`px-3`}style={{background:forendgroundPerDocument}}>10%</div>
      </div>
    </section>
  );
}
