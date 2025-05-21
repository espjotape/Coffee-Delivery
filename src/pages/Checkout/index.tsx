import { useState } from "react";
import { PaymentMethodButton } from "../../components/PaymentMethodButton";
import { TextInput } from "../../components/TextInput";
import { Container, InfoCheckout, Heading, AddressForm, PaymentContainer, FormContainer, PaymentOptions, CartContainer, Coffee, CartTotal, Button } from "./styles";
import { CreditCard, CurrencyDollar, MapPin, Bank, Money, Trash } from '@phosphor-icons/react'
import { ItemQuantity } from "../../components/ItemQuantity";

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
    <CartContainer>
      <Coffee>
        <img src="/public/img/coffee/expresso-tradicional.png" alt=""/>        <div className="coffeeContent">
          <div  className="coffeeInfo">
            <span>Expresso Tradicional</span>
              <div className="btn">
                <ItemQuantity quantity={1}/>
                <button>
                  <Trash />
                  <span>remover</span>
                </button>
              </div>
          </div>
          <aside>R$ 9,99</aside>
        </div>
        
      </Coffee>
      <span />
      <Coffee>
        <img src="/public/img/coffee/latte.png" alt=""/>        <div className="coffeeContent">
          <div  className="coffeeInfo">
            <span>Latte</span>
              <div className="btn">
                <ItemQuantity quantity={1}/>
                <button>
                  <Trash />
                  <span>remover</span>
                </button>
              </div>
          </div>
          <aside>R$ 19,80</aside>
        </div>
      </Coffee>
      <span />
   
      <CartTotal>
        <section>
          <span>Total de itens</span>
          <span className="order-info">R$ 27,90</span>
        </section>
        <section>
          <span>Entrega</span>
          <span className="order-info">R$ 3,50</span>
        </section>
        <section>
          <h4>Total</h4>
          <h4>R$ 33,20</h4>
        </section>

        <Button>confirmar pedido</Button>
      </CartTotal>
    </CartContainer>
   </InfoCheckout>
  </Container>
 )
}