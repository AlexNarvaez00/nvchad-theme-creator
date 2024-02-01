import { Base16 } from "@/types/Base16Type";
import { Base30 } from "@/types/Base30Type";
import { FormEvent } from "react";

export const onSubmit = (event: FormEvent<HTMLFormElement>) => (base16:Base16,base30:Base30) => {
  event.preventDefault();

  const base16String = JSON.stringify(base16); 
  const base30String = JSON.stringify(base30); 

  console.log(base16String, base30String);

};
