import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useId } from "react";

interface Props {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  value:string;
  disabled?:  boolean; 
}

export default function InputForm({ onChange, label, name, value, disabled  }: Props) {
  const id = useId();

  return (
    <div className={`grid w-full max-w-sm items-center gap-2`}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} disabled={disabled} name={name} onChange={onChange} value={value} />
    </div>
  );
}
