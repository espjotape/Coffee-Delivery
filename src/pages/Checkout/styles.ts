import styled from "styled-components";

export const Container = styled.div`
 max-width: 70rem;
 display: flex;
 justify-content: space-between;
 margin: 2.5rem auto;
 gap: 2rem;
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
 width: 100%;
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

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${(props => props.theme.COLORS["base-card"])};
  
  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.COLORS['base-button']};
    margin: 2rem 0;
  }
`

export const Coffee = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  min-width: 28rem;
  
  img {
    width: 64px;
    height: 64px;
  }

  > div {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;

    .coffeContent {
      display: flex;
      align-items: center;
    }

    .coffeeInfo {
      display: flex;
      flex-direction: column;

      > span {
        font-size: 1rem;
        line-height: 130%;
        margin-bottom: 0.3rem;
        color: ${(props => props.theme.COLORS["base-subtitle"])};
      }

      .btn {
        display: flex;
        gap: 0.5rem;
        
        svg {
          color: ${(props => props.theme.COLORS.purple)}
        }

        > button {
          padding: 0.5rem;
          background-color: ${(props => props.theme.COLORS["base-button"])};
          border-radius: 6px;
          cursor: pointer;
          
          border: none;
          text-transform: uppercase;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;

          transition: background-color .3s;

          &:hover {
            background-color: ${(props => props.theme.COLORS["base-hover"])}
          } 
        }
      }
    }
  }

  aside {
    font-weight: bold;
  }

`

export const CartTotal = styled.div`
  width: 100%;
  display: flex;  
  flex-direction: column;
  gap: 12px;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${(props => props.theme.COLORS["base-text"])}
    }
  
  .order-info {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  } 
  }
  
  section:last-of-type {
    color: ${(props => props.theme.COLORS["base-subtitle"])};
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const Button = styled.button `
  width: 100%;
  padding: 0.75rem 0.5rem;
  margin-top: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
    
  text-transform: uppercase;
  color: ${(props => props.theme.COLORS["white"])};
  font-size: 0.87rem;
  font-weight: bold;
  line-height: 160%;
    
  background-color: ${(props => props.theme.COLORS["yellow"])};
  border-radius: 6px;
  border: none;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props => props.theme.COLORS['yellow-dark'])};
  }
`