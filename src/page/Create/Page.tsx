import "./page.css";
import Form from "@/components/Form";
import Nvim from "@/components/Nvim";
import { Toaster } from "sonner";

export default function Page() {
  return (
    <>
      <section className={`w-full min-h-screen flex gap-2`}>
        <div className="py-8 px-2 h-screen overflow-auto">
          <Form />
        </div>
        <Nvim />
      </section>
      <Toaster theme="dark" />
    </>
  );
}
