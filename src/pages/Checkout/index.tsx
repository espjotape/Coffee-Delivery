import { TextInput } from "../../components/TextInput";
import { Container, InfoCheckout, Heading, AddressForm } from "./styles";
import { MapPin } from '@phosphor-icons/react'

export function Checkout() {
 return (
  <Container>
   <InfoCheckout>
    <h2>Complete seu pedido</h2>
   
    <form action="">
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
       gridArea="uf"
      />
     </AddressForm>
    </form>
   </InfoCheckout>

   <InfoCheckout>
    <h2>Cafés selecionados</h2>
   </InfoCheckout>
  </Container>
 )
}