import useColors from "@/hooks/useColors";
import InputForm from "./InputForm";
import { Separator } from "./ui/separator";
import { Title } from "./Title";
import { useBase16 } from "@/hooks/useBase16";
import { useBase30 } from "@/hooks/useBase30";

export default function Form() {
  const { setColor, nord_blue, statusline_bg, lightbg, green } = useBase30();

  const { state, setState } = useColors();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setState({ ...state, [name]: value });
  };

  const handleChangeBase30 = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setColor(name, value);
  };

  return (
    <form className={`grid gap-4`}>
      <section className="mt-4 grid gap-4">
        <Title type="h4">NvTree</Title>
        <Separator className="my-4" />
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
          label="Chevron"
          name="foregroundComments"
          value={state.foregroundComments}
          onChange={handleChange}
          disabled={true}
        />
      </section>
      <section className="mt-4 grid gap-4">
        <Title type="h4">Tabs</Title>
        <Separator className="my-4" />
        <InputForm
          label="Background Buffers"
          name="backgroundTabs"
          value={state.backgroundTabs}
          onChange={handleChange}
        />
      </section>

      <section className="mt-4 grid gap-4">
        <Title type="h4">Status Bar</Title>
        <Separator className="my-4" />
        <InputForm
          label="Background"
          name="statusline_bg"
          value={statusline_bg}
          onChange={handleChangeBase30}
        />
        <InputForm
          label="Normal Mode"
          name="nord_blue"
          value={nord_blue}
          onChange={handleChangeBase30}
        />
        <InputForm
          label="File name Status"
          name="lightbg"
          value={lightbg}
          onChange={handleChangeBase30}
        />
        <InputForm
          label="LSP color"
          name="nord_blue"
          value={nord_blue}
          onChange={handleChangeBase30}
          disabled={true}
        />
        <InputForm
          label="Percentage file"
          name="green"
          value={green}
          onChange={handleChangeBase30}
        />
        <InputForm
          label="Name folder"
          name="backgroundFolderIcon"
          value={state.backgroundFolderIcon}
          onChange={handleChange}
        />
      </section>
      <section className="mt-4 grid gap-4">
        <Title type="h4">Editor</Title>
        <Separator className="my-4" />
        <InputForm
          label="Backgound Editor"
          name="background"
          value={state.background}
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
      </section>
    </form>
  );
}
