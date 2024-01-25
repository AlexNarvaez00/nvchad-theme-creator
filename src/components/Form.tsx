import useColors from "@/hoooks/useColors";
import InputForm from "./InputForm";
import { Separator } from "./ui/separator";
import { Title } from "./Title";

export default function Form() {
  const { state, setState } = useColors();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setState({ ...state, [name]: value });
  };

  return (
    <form className={`grid gap-4`}>
      <InputForm
        label="Backgound Editor"
        name="background"
        value={state.background}
        onChange={handleChange}
      />
      <InputForm
        label="Backgound NvTree"
        name="backgroundTree"
        value={state.backgroundTree}
        onChange={handleChange}
      />
      <InputForm
        label="Forenground Folders"
        name="foregroundFolders"
        value={state.foregroundFolders}
        onChange={handleChange}
      />
      <InputForm
        label="Forenground Files"
        name="foregroundFiles"
        value={state.foregroundFiles}
        onChange={handleChange}
      />
      <InputForm
        label="Background Buffers"
        name="backgroundTabs"
        value={state.backgroundTabs}
        onChange={handleChange}
      />
      <InputForm
        label="Comments"
        name="foregroundComments"
        value={state.foregroundComments}
        onChange={handleChange}
      />
      <InputForm
        label="Operators"
        name="foregroundOperators"
        value={state.foregroundOperators}
        onChange={handleChange}
      />
      <InputForm
        label="Functions, Methods, attributes"
        name="foregroundKeywords"
        value={state.foregroundKeywords}
        onChange={handleChange}
      />
      <InputForm
        label="Strings, Char Scape"
        name="foregroundString"
        value={state.foregroundString}
        onChange={handleChange}
      />
      <section className="mt-4 grid gap-4">
        <Title type="h4">Status Bar</Title>
        <Separator className="my-4" />
        <InputForm
          label="Normal Mode"
          name="backgroundMode"
          value={state.backgroundMode}
          onChange={handleChange}
        />
        <InputForm
          label="File name Status"
          name="backgroundFileName"
          value={state.backgroundFileName}
          onChange={handleChange}
        />
        <InputForm
          label="LSP color"
          name="forendgroundLSP"
          value={state.forendgroundLSP}
          onChange={handleChange}
        />

        <InputForm
          label="Percentage file"
          name="forendgroundPerDocument"
          value={state.forendgroundPerDocument}
          onChange={handleChange}
        />
        <InputForm
          label="Name folder"
          name="backgroundFolderIcon"
          value={state.backgroundFolderIcon}
          onChange={handleChange}
        />
      </section>
    </form>
  );
}
