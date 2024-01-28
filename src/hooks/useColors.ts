import { ColorsNvimContext } from "@/contexts/color-nvim-provider";
import { useContext } from "react";

export default function useColors()
{
  const colors = useContext(ColorsNvimContext);
   if (colors === undefined) {
    throw new Error("useColors must be used within a ColorsNvimProvider");

  }
  return colors;
}
