import { useEffect, useState } from "react";
import IndexPage from "./page/page.tsx";

/**
 * bdjf bjdbjd jhb jhbd jhbdj bhj
 */
export default function App() {
  const [state, setState] = useState<string | null>(null);

  useEffect(() => {
    state?.split("");
  }, []);

  return (
    <main>
      <IndexPage />
    </main>
  );
}
