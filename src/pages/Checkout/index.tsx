import { useState } from "react";
import { PaymentMethodButton } from "../../components/PaymentMethodButton";
import { TextInput } from "../../components/TextInput";
import { Container, InfoCheckout, Heading, AddressForm, PaymentContainer, FormContainer, PaymentOptions } from "./styles";
import { CreditCard, CurrencyDollar, MapPin, Bank, Money } from '@phosphor-icons/react'

export function Checkout() {
 const [selected, setSelected] = useState<'credit' | 'debit' | 'cash' | null>(null);

 return (
  <Container>
   <InfoCheckout>
    <h2>Complete seu pedido</h2>
   
    <form action="">
     <FormContainer>
      <Heading>
       <MapPin size={22}/>
       <div>
        <h3>Endereço de entrega</h3>
        <p>Informe o endereço onde deseja receber seu pedido</p>
       </div>
      </Heading>

      <AddressForm>
       <TextInput 
        placeholder="CEP"
        type="number"
        gridArea="cep"
       />

       <TextInput 
        placeholder="Rua"
        gridArea="rua"
       />

       <TextInput 
        placeholder="Numero"
        type="numero"
        gridArea="numero"
       />

       <TextInput 
        placeholder="Complemento"
        type="numero"
        optional
        gridArea="complemento"
       />

       <TextInput 
        placeholder="Bairro"
        gridArea="bairro"
       />

       <TextInput 
        placeholder="Cidade"
        gridArea="cidade"
       />

       <TextInput 
        placeholder="UF"
        maxLength={2}
        gridArea="uf"
       />
      </AddressForm>
     </FormContainer>

     <PaymentContainer>
      <Heading>
       <CurrencyDollar size={22}/>
       <div>
        <h3>Pagamento</h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
       </div>
      </Heading>

      <PaymentOptions>
       <PaymentMethodButton 
         icon={<CreditCard size={22} />} 
         label="Cartão de Crédito" 
         isActive={selected === 'credit'} 
         onClick={() => setSelected('credit')}
       />
       <PaymentMethodButton 
         icon={<Bank size={22} />} 
         label="Cartão de Débito" 
         isActive={selected === 'debit'} 
         onClick={() => setSelected('debit')}
       />
       <PaymentMethodButton 
         icon={<Money size={22} />} 
         label="Dinheiro" 
         isActive={selected === 'cash'} 
         onClick={() => setSelected('cash')}
       />
      </PaymentOptions>
     </PaymentContainer>
    </form>
   </InfoCheckout>

   <InfoCheckout>
    <h2>Cafés selecionados</h2>
   </InfoCheckout>
  </Container>
 )
}