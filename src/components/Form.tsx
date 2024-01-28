import useColors from "@/hooks/useColors";
import InputForm from "./InputForm";
import { Separator } from "./ui/separator";
import { Title } from "./Title";
import { useBase16 } from "@/hooks/useBase16";
import { useBase30 } from "@/hooks/useBase30";

export default function Form() {
  const {
    setColor,
    black2,
    nord_blue,
    statusline_bg,
    lightbg,
    green,
    folder_bg,
    darker_black,
  } = useBase30();

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
          name="darker_black"
          value={darker_black}
          onChange={handleChangeBase30}
        />
        <InputForm
          label="Forenground Folders"
          name="folder_bg"
          value={folder_bg}
          onChange={handleChangeBase30}
        />
        <InputForm
          label="Background open folder"
          name="black2"
          value={black2}
          onChange={handleChangeBase30}
        />
      </section>
      <section className="mt-4 grid gap-4">
        <Title type="h4">Tabs</Title>
        <Separator className="my-4" />
        <InputForm
          label="Background Buffers"
          name="black2"
          value={black2}
          onChange={handleChangeBase30}
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
