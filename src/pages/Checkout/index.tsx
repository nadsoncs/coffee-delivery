import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

import { CoffeeMinCard } from '../../components/CoffeeMinCard';
import { CartContext } from '../../context/cartContext';

import { CheckoutContainer, FormAddress, Payment, CoffeesSelected, ConfirmationButton } from './styles'

type PaymentType = 'creditCard'|'bank' | 'money' |''

const newBuyValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string(),
})

type NewBuyFormData = zod.infer<typeof newBuyValidationSchema>

export function Checkout() {
  const {itens} = useContext(CartContext)
  const [paymentType, setPaymentType] = useState<PaymentType>('')
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm<NewBuyFormData>({
    resolver: zodResolver(newBuyValidationSchema)
  })

  const shipping = 3.5
  const shippingFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(shipping)

  const priceTotal = itens.reduce((price, item) => (price + (item.amount * item.price)), 0)
  const priceTotalFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(priceTotal/100)
  const priceWithShipping = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(priceTotal/100 + shipping)

  function handleSelectPaymentType(type: PaymentType) {
    setPaymentType(type)
  }

  function handleCreateNewBuy(data: NewBuyFormData) {
    if(paymentType !== '' ) {
      const newBuyJSON = JSON.stringify({
        ...data,
        paymentType: paymentType
      })
      console.log(newBuyJSON)
      localStorage.setItem('@coffee-delivery:newBuy', newBuyJSON)
      navigate('/success')
    }
  }

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <FormAddress >
          <header>
            <MapPinLine size={22} className="map"/>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <div className="inputContainer"> 
            <input 
              type="text" 
              placeholder="CEP" 
              className="inputMd"
              {...register('cep')}
            />
            
            <input 
              type="text" 
              placeholder="Rua" 
              className="road"
              {...register('street')}
            />

            <div className="inputGroup">
              <input 
                type="text" 
                placeholder="Número" 
                className="inputMd"
                {...register('number')}
              />
              <input 
                type="text" 
                placeholder="Complemento" 
                className="inputFlex"
                {...register('complement')}
              />
              <span>Opcional</span>
            </div>

            <div className="inputGroup">
              <input 
                type="text" 
                placeholder="Bairro" 
                className="inputMd"
                {...register('district')}
              />
              <input 
                type="text" 
                placeholder="Cidade" 
                className="inputFlex"
                {...register('city')}
              />
              <input 
                type="text" 
                placeholder="UF" 
                className="inputSm" 
                maxLength={2}
                {...register('uf')}
              />
            </div>
          </div>
        </FormAddress>

        <Payment>
          <header>
            <CurrencyDollar size={22} className="dollar"/>
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>

          <div className="paymentType">
            <button 
              className={paymentType === 'creditCard' ? 'selected' : ''}
              onClick={() => handleSelectPaymentType('creditCard')}
            >
              <CreditCard size={16} className="dollar"/>
              cartão de crédito
            </button>
            <button
              className={paymentType === 'bank' ? 'selected' : ''}
              onClick={() => handleSelectPaymentType('bank')}
            >
              <Bank  size={16} className="dollar"/>
              cartão de débito
            </button>
            <button
              className={paymentType === 'money' ? 'selected' : ''}
              onClick={() => handleSelectPaymentType('money')}
            >
              <Money size={16} className="dollar"/>
              dinheiro
            </button>
          </div>
        </Payment>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <CoffeesSelected>
          {
            itens.map(item => {
              return (
                <>
                <CoffeeMinCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  cover={item.cover}
                  amount={item.amount}
                />
                <hr />
                </>
              )
            })
          }
          <table>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>{priceTotalFormatted}</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>{shippingFormatted}</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td>Total</td>
                <td>{priceWithShipping}</td>
              </tr>
            </tfoot>
          </table>
          <ConfirmationButton onClick={handleSubmit((data) => handleCreateNewBuy(data))}>CONFIRMAR PEDIDO</ConfirmationButton>
        </CoffeesSelected>
      </div>
    </CheckoutContainer>
  );
}