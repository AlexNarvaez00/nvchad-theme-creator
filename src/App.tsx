import { useEffect, useState } from "react";
import IndexPage from "./page/Index/Page.tsx";

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
