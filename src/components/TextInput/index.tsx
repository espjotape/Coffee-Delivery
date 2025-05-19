import { useState } from "react";
import { Container } from "./styles";

type Props = {
 optional?: boolean
 placeholder: string
 gridArea: string
 type?: string
}

export function TextInput ({ placeholder ,optional, gridArea, ...rest } : Props) {
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
  </Container>
 )
}