import { useColorStore } from "@/store/ColorStore";
export const useBase16 = () => ({
  ...useColorStore(({ base16, setColorBase16 }) => ({
    ...base16,
    setColor: setColorBase16,
  })),
});
