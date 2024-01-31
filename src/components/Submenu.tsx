import { useBase30 } from "@/hooks/useBase30";

interface Props {}

export const Submenu = ({}: Props) => {
  const { black, blue, pmenu_bg } = useBase30();
  return (
    <div style={{ background: black }} className="w-[250px]">
      <ul>
        <li
          style={{ color: black, background: pmenu_bg }}
          className={`px-2 `}
        >
          item 1
        </li>
        <li style={{ color: blue }} className={`px-2 `}>
          item 2
        </li>
        <li style={{ color: blue }} className={`px-2 `}>
          item 3
        </li>
        <li style={{ color: blue }} className={`px-2 `}>
          item 4
        </li>
        <li style={{ color: blue }} className={`px-2 `}>
          item 5
        </li>
      </ul>
    </div>
  );
};
