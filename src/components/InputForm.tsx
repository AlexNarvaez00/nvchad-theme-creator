import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useId, useState } from "react";

interface Props {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  value:string;
  disabled?:  boolean; 
}

export default function InputForm({ onChange, label, name, value, disabled  }: Props) {
  const [state, setSate] = useState(value);
  const id = useId();

  const onChangeLocal = (event:React.FormEvent<HTMLInputElement>) => {
    setSate(event.currentTarget.value)
  }

  return (
    <div className={`grid w-full items-center gap-2 mb-4`}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} disabled={disabled} name={name} onBlur={onChange} onChange={onChangeLocal} value={state} type="color" />
    </div>
  );
}
