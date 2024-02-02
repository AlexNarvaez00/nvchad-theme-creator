import { useColorStore } from "@/store/ColorStore";
import { Button } from "./ui/button";
import { MouseEvent } from "react";
import { themeTemplate } from "@/lib/template";
import { toast } from "sonner";

export const ButtonGenerate = () => {
  const { base16, base30, name } = useColorStore(
    ({ base16, base30, name }) => ({
      base16,
      base30,
      name,
    }),
  );
  
  //@ts-ignore
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const base16S = (JSON.stringify(base16) + "")
      .replaceAll(`"`, ``)
      .replaceAll(`:`, `="`)
      .replaceAll(",", `",`)
      .replaceAll(`}`, `"}`);

    const base30S = (JSON.stringify(base30) + "")
      .replaceAll(`"`, ``)
      .replaceAll(`:`, `="`)
      .replaceAll(",", `",`)
      .replaceAll(`}`, `"}`);

    const theme = themeTemplate
      .replace("#base30#", base30S)
      .replace("#base16#", base16S)
      .replace("#name#", name);
    navigator.clipboard.writeText(theme).then(() => {
      toast("Theme copied! 🚀", {
        duration: 2000,
      });
    });
  };

  return (
    <>
      <Button variant="outline" className="mx-4" onClick={handleClick}>
        Generate
      </Button>
    </>
  );
};
