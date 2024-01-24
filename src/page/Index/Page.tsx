import Form from "@/components/Form";
import "./page.css";
import Nvim from "@/components/Nvim";

export default function Page() {
  return (
    <section className={`w-full min-h-screen flex gap-2`}>
      <div className="py-8 px-4 h-screen overflow-auto">
        <Form />
      </div>
      <Nvim />
    </section>
  );
}
