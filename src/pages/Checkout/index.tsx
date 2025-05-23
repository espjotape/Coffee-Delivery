import { Fragment, useContext } from "react";
import { PaymentMethodButton } from "../../components/PaymentMethodButton";
import { TextInput } from "../../components/TextInput";
import { Container, InfoCheckout, Heading, AddressForm, PaymentContainer, FormContainer, PaymentOptions, CartContainer, Coffee, CartTotal, Button } from "./styles";
import { CreditCard, CurrencyDollar, MapPin, Bank, Money, Trash } from '@phosphor-icons/react'
import { ItemQuantity } from "../../components/ItemQuantity";
import { coffees } from "../../../coffees-data.json"
import { CartContext } from "../../contexts/CartProvider";
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'

const checkoutFormSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(2, "Informe a UF"),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: "Informe um método e pagamento"
  })
})

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

export type OrderInfo = zod.infer<typeof checkoutFormSchema>

export function Checkout() {
 const { cart, removeItem ,decrementItemQuantity, incrementItemQuantity, checkout } = useContext(CartContext)
 const { register, handleSubmit, watch, setValue ,formState: { errors } } = useForm<FormInputs>({
  resolver: zodResolver(checkoutFormSchema)
 })

 const selectedPaymentMethod = watch('paymentMethod')
 const emptyCart = cart.length === 0

 const showError = !!errors.paymentMethod && !selectedPaymentMethod;

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

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return(previousValue += currentItem.price * currentItem.quantity)
  }, 0 )

  const delivery = 3.5

  function handleOrderCheckout(data: OrderInfo) {

    checkout(data)
  }

 return (
  <Container>
   <InfoCheckout>
    <h2>Complete seu pedido</h2>
   
    <form id="order" onSubmit={handleSubmit(handleOrderCheckout)} action="">
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
        error={errors.cep}
        {...register('cep', { valueAsNumber: true})}
       />

       <TextInput 
        placeholder="Rua"
        gridArea="rua"
        error={errors.street}
        {...register('street')}
       />

       <TextInput 
        placeholder="Número"
        type="numero"
        gridArea="numero"
        error={errors.number}
        {...register('number')}
       />

       <TextInput 
        placeholder="Complemento"
        type="numero"
        optional
        gridArea="complemento"
        error={errors.fullAddress}
        {...register('fullAddress')}
       />

       <TextInput 
        placeholder="Bairro"
        gridArea="bairro"
        error={errors.neighborhood}
        {...register('neighborhood')}
       />

       <TextInput 
        placeholder="Cidade"
        gridArea="cidade"
        error={errors.city}
        {...register('city')}
       />

       <TextInput 
        placeholder="UF"
        maxLength={2}
        gridArea="uf"
        error={errors.state}
        {...register('state', {
          onChange: (e) => {
            e.target.value = e.target.value.toUpperCase();
          }
        })}
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
         isActive={selectedPaymentMethod === 'credit'} 
         hasError={showError}
         onClick={() => setValue('paymentMethod','credit')}
       />
       <PaymentMethodButton 
         icon={<Bank size={22} />} 
         label="Cartão de Débito" 
         isActive={selectedPaymentMethod === 'debit'}
         hasError={showError} 
         onClick={() => setValue('paymentMethod','debit')}
       />
       <PaymentMethodButton 
         icon={<Money size={22} />} 
         label="Dinheiro" 
         isActive={selectedPaymentMethod === 'cash'}
         hasError={showError} 
         onClick={() => setValue('paymentMethod','cash')}
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
                  <span onClick={() => handleItemRemove(coffee.id)}>remover</span>
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

        <Button disabled={emptyCart} type="submit" form="order">confirmar pedido</Button>
      </CartTotal>
    </CartContainer>
   </InfoCheckout>
  </Container>
 )
}