import { ThemeProvider } from "./contexts/theme-provider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/router.tsx";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  );
}
