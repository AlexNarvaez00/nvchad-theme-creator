export default function NvTabs() {
  return (
    <ul className={`flex`}>
      <li
        className={`flex justify-center`}
      >
        <p className="px-6">Index.tsx</p>
      </li>
      <li className={`flex justify-center`}>
        <p className="px-6">Nav.astro</p>
      </li>
      <li className={`flex justify-center`}>
        <p className="px-6">Product.java</p>
      </li>
    </ul>
  );
}
