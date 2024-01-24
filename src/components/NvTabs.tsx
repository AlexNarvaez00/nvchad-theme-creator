import { NvTabsTypes } from "@/types/nvTabs";

interface Props extends NvTabsTypes{}

export default function NvTabs(
  { background, backgroundActive, backgroundInactive }: Props,
) {
  return (
    <ul className={`flex`} style={{ background }}>
      <li
        className={`flex justify-center`}
        style={{ background: backgroundActive }}
      >
        <p className="px-6">Index.tsx</p>
      </li>
      <li
        className={`flex justify-center`}
        style={{ background: backgroundInactive }}
      >
        <p className="px-6">Nav.astro</p>
      </li>
      <li
        className={`flex justify-center`}
        style={{ background: backgroundInactive }}
      >
        <p className="px-6">Product.java</p>
      </li>
    </ul>
  );
}
