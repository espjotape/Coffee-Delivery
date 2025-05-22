import { Container } from "./styles";

type Props = {
 icon: React.ReactNode
 label: string
 isActive: boolean
 hasError: boolean
 onClick: () => void
}

export function PaymentMethodButton({ icon, label, isActive, hasError ,onClick }: Props) {
 return(
  <Container data-error={hasError} data-state={isActive} onClick={onClick}>
   {icon}
   <span>{label}</span>
  </Container>
 )
}