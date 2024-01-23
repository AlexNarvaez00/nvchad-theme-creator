import "./page.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Nvim from "@/components/Nvim";

export default function Page() {
  return (
    <section className={`w-full flex gap-2`}>
      {/* Container inputs color   */}
      <div className="py-8 px-4">
        <form className={`grid gap-4`}>
          <div className={`grid w-full max-w-sm items-center gap-2`}>
            <Label htmlFor="input-comment">Commets</Label>
            <Input id="input-comment" name="comment" />
          </div>
          <div className={`grid w-full max-w-sm items-center gap-2`}>
            <Label htmlFor="input-operadores">Operadores</Label>
            <Input id="input-operadores" name="Operadores" />
          </div>

          <div className={`grid w-full max-w-sm items-center gap-2`}>
            <Label htmlFor="input-bg-nvtree">Backgound NvTree</Label>
            <Input id="input-bg-nvtree" name="bg-nvtree" />
          </div>
          <div className={`grid w-full max-w-sm items-center gap-2`}>
            <Label htmlFor="input-bg-editor">Backgound Editor</Label>
            <Input id="input-bg-editor" name="bg-editor" />
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
            <Label htmlFor="input-fg-consts">
              Enteros, Booleanos y constantes
            </Label>
            <Input id="input-fg-const" name="fg-consts" />
          </div>
          <div className={`grid w-full max-w-sm items-center gap-2`}>
            <Label htmlFor="input-fg-consts">
              Enteros, Booleanos y constantes
            </Label>
            <Input id="input-fg-const" name="fg-consts" />
          </div>
          <div className={`grid w-full max-w-sm items-center gap-2`}>
            <Label htmlFor="input-bg-selection">
              Enteros, Booleanos y constantes
            </Label>
            <Input id="input-bg-selection" name="bg-selection" />
          </div>
          <div className={`grid w-full max-w-sm items-center gap-2`}>
            <Label htmlFor="input-bg-select-submenu">
              Color submenu
            </Label>
            <Input id="input-bg-select-submenu" name="bg-select-submenu" />
          </div>
        </form>
      </div>
      <Nvim /> 
    </section>
  );
}
