import { InputWrapper, Label, StyledInput } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hasError?: boolean;
}
export function Input({ id, label, hasError, ...props }: InputProps) {
  return (
    <InputWrapper >
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput id={id} {...props} />
    </InputWrapper>
  )
}