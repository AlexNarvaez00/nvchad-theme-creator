import "./page.css";
import ContainerColors from "./components/ContainerColors";
import ContainerCode from "./components/ContainerCode";

interface Props {}

export default function page({}: Props) {
  return (
    <div className="page">
      <ContainerColors />
      <ContainerCode />
    </div>
  );
}
