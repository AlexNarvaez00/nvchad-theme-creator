import useColors from "@/hooks/useColors";
import InputForm from "./InputForm";
import { Separator } from "./ui/separator";
import { Title } from "./Title";
import { useBase16 } from "@/hooks/useBase16";
import { useBase30 } from "@/hooks/useBase30";

export default function Form() {
  const { base00, setColor: setColor16 } = useBase16();

  const {
    setColor,
    black2,
    nord_blue,
    statusline_bg,
    lightbg,
    green,
    line,
    folder_bg,
    darker_black,grey_fg,
    yellow,
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

  const handleChangeBase16 = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setColor16(name, value);
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
        <InputForm
          label="Line"
          name="line"
          value={line}
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
          disabled={true}
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
          name="yellow"
          value={yellow}
          onChange={handleChangeBase30}
        />
      </section>
      <section className="mt-4 grid gap-4">
        <Title type="h4">Editor</Title>
        <Separator className="my-4" />
        <InputForm
          label="Backgound Editor"
          name="base00"
          value={base00}
          onChange={handleChangeBase16}
        />

        <InputForm
          label="Comments"
          name="grey_fg"
          value={grey_fg}
          onChange={handleChangeBase30}
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
