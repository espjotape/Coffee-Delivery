import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import { Container, Order, InfoContainer, InfoOrders } from './styles'

export function Success() {
  const { order } = useContext(CartContext)

  return (
    <Container>
      <Order>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      
        <InfoContainer>
          <div>
              <InfoOrders>
            <div>
              <div className='icon-wrapper purple'>
                <MapPin weight='fill' size={32}/>
              </div>
                <section>
                  Entrega em{' '} 
                  <strong>{order?.street}, {order?.number}</strong>

                  <p>
                    {order?.neighborhood} - {order?.city}, {order?.state}
                  </p>

                </section> 
              
            </div>
            <div>
              <div className='icon-wrapper yellow'>
                <Timer weight='fill' size={32}/>
              </div>
                <section>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </section> 
            </div>
            <div>
              <div className='icon-wrapper yellow-dark'>
                <CurrencyDollar size={32}/>
              </div>
              
                <section>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
                </section>   
            </div>
          </InfoOrders>
          </div>
        </InfoContainer> 
      </Order>
      <img src="/public/img/delivery.svg" alt=""/>
    </Container>
  )
}
