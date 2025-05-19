import styled from "styled-components";

export const Container = styled.div`
 max-width: 70rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 2.5rem auto;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  background-color: ${(props => props.theme.COLORS["base-card"])};
  border-radius: 6px;
  padding: 2rem;
`

export const InfoCheckout = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;

 h2 {
  font-size: 1.12rem;
  font-weight: bold;
  line-height: 130%;
  color: ${(props => props.theme.COLORS["base-subtitle"])}
 }
`

export const Heading = styled.section`
 display: flex;
 gap: 0.2rem;

 div {
  display: flex;
  flex-direction: column;
  
  h3 {
   font-size: 1rem;
   font-weight: 400;
   line-height: 130%;
   color: ${(props => props.theme.COLORS["base-subtitle"])}
  }

  > p {
   font-size: 0.8rem;
   line-height: 130%;
   color: ${(props => props.theme.COLORS["base-text"])}
  }
 }

 svg {
  color: ${(props => props.theme.COLORS["yellow-dark"])}
 }
`

export const AddressForm = styled.div`
 display: grid;
 grid-template-columns: 200px 1fr 60px;
 grid-template-rows: auto auto auto;
 grid-template-areas: 
 "cep . . "
 "rua rua rua"
 "numero complemento complemento"
 "bairro cidade uf";
 grid-gap: 1rem 0.75rem;
`

export const PaymentContainer = styled(FormContainer)`
 margin-top: 0.75rem;
 
 svg {
  color: ${(props => props.theme.COLORS["purple"])}
 }
`

export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`