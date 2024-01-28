import { useColorStore } from "@/store/ColorStore";
export const useBase30 = () => ({
  ...useColorStore(({ base30, setColorBase30 }) => ({
    ...base30,
    setColor: setColorBase30,
  })),
});
