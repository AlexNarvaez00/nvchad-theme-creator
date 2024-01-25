import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useColors from "@/hoooks/useColors";
import InputForm from "./InputForm";

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
        label="Strings Class"
        name="foregroundString"
        value={state.foregroundString}
        onChange={handleChange}
      />

      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-fg-quotes">
          Comillas, caracacteres de escape y expreciones regulares
        </Label>
        <Input id="input-fg-quotes" name="fg-quotes" />
      </div>

      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-fg-class">
          Clases, fondo de palabras buscadas.
        </Label>
        <Input id="input-fg-class" name="fg-class" />
      </div>
      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-fg-consts">Enteros, Booleanos y constantes</Label>
        <Input id="input-fg-const" name="fg-consts" />
      </div>
      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-fg-consts">Enteros, Booleanos y constantes</Label>
        <Input id="input-fg-const" name="fg-consts" />
      </div>
      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-bg-selection">
          Enteros, Booleanos y constantes
        </Label>
        <Input id="input-bg-selection" name="bg-selection" />
      </div>
      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-bg-select-submenu">Color submenu</Label>
        <Input id="input-bg-select-submenu" name="bg-select-submenu" />
      </div>
    </form>
  );
}
