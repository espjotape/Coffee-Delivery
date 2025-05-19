import { Container } from "./styles";

type Props = {
 icon: React.ReactNode
 label: string
 isActive: boolean
 onClick: () => void
}

export function PaymentMethodButton({ icon, label, isActive, onClick }: Props) {
 return(
  <Container data-state={isActive} onClick={onClick}>
   {icon}
   <span>{label}</span>
  </Container>
 )
}