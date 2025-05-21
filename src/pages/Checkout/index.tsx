import { Fragment, useContext, useState } from "react";
import { PaymentMethodButton } from "../../components/PaymentMethodButton";
import { TextInput } from "../../components/TextInput";
import { Container, InfoCheckout, Heading, AddressForm, PaymentContainer, FormContainer, PaymentOptions, CartContainer, Coffee, CartTotal, Button } from "./styles";
import { CreditCard, CurrencyDollar, MapPin, Bank, Money, Trash } from '@phosphor-icons/react'
import { ItemQuantity } from "../../components/ItemQuantity";
import { coffees } from "../../../coffees-data.json"
import { CartContext } from "../../contexts/CartProvider";

export function Checkout() {
 const { cart, decrementItemQuantity, incrementItemQuantity } = useContext(CartContext)
 const [selected, setSelected] = useState<'credit' | 'debit' | 'cash' | null>(null);

 const coffeesInCart = cart.map((item) => {
  const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

  if(!coffeeInfo) {
    throw new Error('Coffee not found')
  }

  return {
    ...coffeeInfo,
    quantity: item.quantity,
  }
 })

  function handleIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return(previousValue += currentItem.price * currentItem.quantity)
  }, 0 )

  const delivery = 3.5

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
     {coffeesInCart.map((coffee) => (
      <Fragment key={coffee.id}>
        <Coffee>
          <img src={coffee.image} alt={coffee.title} />
          <div className="coffeeContent">
            <div className="coffeeInfo">
              <span>{coffee.title}</span>
              <div className="btn">
                <ItemQuantity
                  onIncrement={() => handleIncrement(coffee.id)}
                  onDecrement={() => handleDecrement(coffee.id)}
                  quantity={coffee.quantity}
                />
                <button>
                  <Trash />
                  <span>remover</span>
                </button>
              </div>

            </div>
            <aside>
              R$ {coffee.price.toFixed(2)}
            </aside>
          </div>
        </Coffee>
        <span className="line" />
      </Fragment>
      ))}

      <CartTotal>
        <section>
          <span>Total de itens</span>
          <span className="order-info">
            {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(totalItemsPrice)}
            </span>
        </section>
        <section>
          <span>Entrega</span>
          <span className="order-info">
           {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(delivery)}
          </span>
        </section>
        <section>
          <h4>Total</h4>
          <h4>
            {new Intl.NumberFormat('pt-br', {
              currency: 'BRL',
              style: 'currency',
            }).format(totalItemsPrice + delivery)}
          </h4>
        </section>

        <Button>confirmar pedido</Button>
      </CartTotal>
    </CartContainer>
   </InfoCheckout>
  </Container>
 )
}