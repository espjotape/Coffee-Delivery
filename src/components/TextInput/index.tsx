import { useState, type InputHTMLAttributes } from "react";
import { Container, Tooltip } from "./styles";
import type { FieldError } from "react-hook-form";
import { WarningCircle } from "@phosphor-icons/react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
 optional?: boolean
 placeholder: string
 gridArea: string
 type?: string
 error?: FieldError
}

export function TextInput ({ placeholder ,optional, gridArea, error,...rest } : Props) {
 const [isFocused, setIsFocused] = useState(false)

 return(
  <Container 
   data-state={isFocused ? 'focused' : 'blurred' }
   style={{ gridArea: gridArea }}
   >
    <input 
    type="text"
    placeholder={placeholder}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    {...rest}
    />
   {optional ? <span>Opcional</span> : null}

   {error && (
    <Tooltip>
      <WarningCircle size={16} weight="fill" color="red" />
      <span>{error.message}</span>
     </Tooltip>
    )}
  </Container>
 )
}