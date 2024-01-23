import IndexPage from "./page/Index/Page.tsx";
import { ThemeProvider } from "./contexts/theme-provider.tsx";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <IndexPage />
      </main>
    </ThemeProvider>
  );
}
