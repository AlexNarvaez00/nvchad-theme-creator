import InputForm from "./InputForm";
import { Title } from "./Title";
import { useBase16 } from "@/hooks/useBase16";
import { useBase30 } from "@/hooks/useBase30";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormEvent } from "react";
import { ButtonGenerate } from "./ButtonGenerate";
import { useColorStore } from "@/store/ColorStore";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function Form() {
  const {
    base00,
    base02,
    base05,
    base08,
    base09,
    base0A,
    base0B,
    base0C,
    base0D,
    base0E,
    base0F,
    setColor: setColor16,
  } = useBase16();

  const {
    baby_pink,
    black,
    black2,
    blue,
    darker_black,
    folder_bg,
    green,
    grey,
    grey_fg,
    lightbg,
    line,
    nord_blue,
    one_bg,
    one_bg2,
    one_bg3,
    pink,
    pmenu_bg,
    purple,
    red,
    setColor,
    teal,
    statusline_bg,
    white,
    yellow,
  } = useBase30();

  const { setName,name } = useColorStore(({ setName, name }) => ({ setName: setName, name }));

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

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <form
      className={`grid gap-4`}
      onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
    >
      <div>
        <Label>Nombre</Label>
        <Input name="name" onChange={handleChange} value={name} type="text" />
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Title type="h4" className="inline-block">
              NvTree
            </Title>
          </AccordionTrigger>{" "}
          <AccordionContent className="px-3">
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
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Title type="h4" className="inline-block">
              Tabs
            </Title>
          </AccordionTrigger>{" "}
          <AccordionContent className="px-3">
            <InputForm
              label="Background Buffers"
              name="black2"
              value={black2}
              onChange={handleChangeBase30}
              disabled={true}
            />
            <InputForm
              label="Forenground Icon button toggle theme"
              name="one_bg"
              value={one_bg}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Background Icon button toggle theme"
              name="one_bg3"
              value={one_bg3}
              onChange={handleChangeBase30}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <Title type="h4" className="inline-block">
              Status Bar
            </Title>
          </AccordionTrigger>{" "}
          <AccordionContent className="px-3">
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
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <Title type="h4" className="inline-block">
              Editor
            </Title>
          </AccordionTrigger>{" "}
          <AccordionContent className="px-3">
            <InputForm
              label="Backgound Editor"
              name="base00"
              value={base00}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Text selected"
              name="base02"
              value={base02}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Objecst and carets"
              name="base05"
              value={base05}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Varaibles and attributes"
              name="base08"
              value={base08}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Integers, booleand and constanst"
              name="base09"
              value={base09}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Classes and Interfaces"
              name="base0A"
              value={base0A}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Strings, Char Scape"
              name="base0B"
              value={base0B}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Regular Expresions"
              name="base0C"
              value={base0C}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Functions, Methods, attributes"
              name="base0D"
              value={base0D}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Keywords"
              name="base0E"
              value={base0E}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Brace and Brackets"
              name="base0F"
              value={base0F}
              onChange={handleChangeBase16}
            />
            <InputForm
              label="Comments"
              name="grey_fg"
              value={grey_fg}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Line Numbers"
              name="grey"
              value={grey}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Current Line"
              name="white"
              value={white}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Current Block"
              name="one_bg2"
              value={one_bg2}
              onChange={handleChangeBase30}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <Title type="h4" className="inline-block">
              Autocomplete
            </Title>
          </AccordionTrigger>{" "}
          <AccordionContent className="px-3">
            <InputForm
              label="Foreground"
              name="blue"
              value={blue}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Background"
              name="black"
              value={black}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Selected Item"
              name="pmenu_bg"
              value={pmenu_bg}
              onChange={handleChangeBase30}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            <Title type="h4" className="inline-block">
              Icons colors
            </Title>
          </AccordionTrigger>{" "}
          <AccordionContent className="px-3">
            <InputForm
              label="Red"
              name="red"
              value={red}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Pink"
              name="pink"
              value={pink}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Baby pink"
              name="baby_pink"
              value={baby_pink}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Purple (warning, erros)"
              name="purple"
              value={purple}
              onChange={handleChangeBase30}
            />
            <InputForm
              label="Teal (TS file color)"
              name="teal"
              value={teal}
              onChange={handleChangeBase30}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <ButtonGenerate />
    </form>
  );
}
