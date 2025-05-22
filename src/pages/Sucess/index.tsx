import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'

export function Success() {
  const { order } = useContext(CartContext)
  console.log(order)
  return (
    <div>
      <h2>Pedido concluído!</h2>
      {order ? (
        <>
          <p>Rua: {order.street}, Nº {order.number}</p>
          <p>Bairro: {order.neighborhood}</p>
          <p>Cidade: {order.city} - {order.state}</p>
          <p>CEP: {order.cep}</p>
          <p>Pagamento: {order.paymentMethod}</p>
          {/* e mais informações */}
        </>
      ) : (
        <p>Nenhum pedido recente.</p>
      )}
    </div>
  )
}
