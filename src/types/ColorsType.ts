import { Base16 } from "./Base16Type";
import { Base30 } from "./Base30Type";

export interface Colors {
  base30: Base30;
  base16: Base16;
  setColorBase30: (key: string, value: string) => void;
  setColorBase16: (key: string, value: string) => void;
}
