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
      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-comment">Commets</Label>
        <Input id="input-comment" name="comment" />
      </div>
      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-operadores">Operadores</Label>
        <Input id="input-operadores" name="Operadores" />
      </div>

      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-fg-functions">
          Funciones, Metodos, Atributos
        </Label>
        <Input id="input-fg-functions" name="fg-functions" />
      </div>
      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-fg-keywords">Palabras cable, selector</Label>
        <Input id="input-fg-keywords" name="fg-keywords" />
      </div>
      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-fg-quotes">
          Comillas, caracacteres de escape y expreciones regulares
        </Label>
        <Input id="input-fg-quotes" name="fg-quotes" />
      </div>
      <div className={`grid w-full max-w-sm items-center gap-2`}>
        <Label htmlFor="input-fg-strings">
          Cadenas, clases heredadas (Lineas agregadas)
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
