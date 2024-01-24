import "./page.css";
import Form from "@/components/Form";
import Nvim from "@/components/Nvim";
import { ColorsNvimProvider } from "@/contexts/color-nvim-provider";

export default function Page() {
  return (
    <ColorsNvimProvider>
      <section className={`w-full min-h-screen flex gap-2`}>
        <div className="py-8 px-4 h-screen overflow-auto">
          <Form />
        </div>
        <Nvim />
      </section>
    </ColorsNvimProvider>
  );
}
