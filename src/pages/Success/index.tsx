import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { SuccessContainer, OrderItem } from "./styles";

import illustration from '../../assets/illustration.svg'
import { useEffect, useState } from "react";

interface NewBuyData {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
  paymentType: string;
}
export function Success (){
  const [newBuy, setNewBuy] = useState({} as NewBuyData)
  const paymentTypeFormatted = formatPaymentType()

  function formatPaymentType() {
    switch(newBuy.paymentType) {
      case 'creditCard':
        return 'Cartão de crédito'
      case 'bank':
        return 'Cartão de débito'
      case 'money':
        return 'Dinheiro'
      default:
        return 'Dinheiro'
    }
  }

  useEffect(() => {
    const newBuyJSON = localStorage.getItem('@coffee-delivery:newBuy')

    if (newBuyJSON) {
      setNewBuy(JSON.parse(newBuyJSON))
    }

  }, [])
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <main>
            <div className="orderInfo">
              <OrderItem>
                <div className="icon purple">
                  <MapPin size={16} weight="fill"/>
                </div>
                <div>
                  <p>Entrega em <strong>{newBuy.street}, {newBuy.number}, {newBuy.complement}</strong>, {newBuy.district} - {newBuy.city}, {newBuy.uf}</p>
                </div>
              </OrderItem>
              <OrderItem>
                <div className="icon yellow">
                  <Timer size={16} weight="fill" />
                </div>
                <div>
                  <p>Previsão de entrega</p>
                  <p><strong>20 min - 30 min</strong></p>
                </div>
              </OrderItem>
              <OrderItem>
                <div className="icon yellow-dark">
                  <CurrencyDollar size={16} weight="fill" />
                </div>
                <div>
                  <p>Pagamento na entrega</p>
                  <p><strong>{paymentTypeFormatted}</strong></p>
                </div>
              </OrderItem>
            </div>
          <div>
            <img src={illustration} alt="" />
          </div>
        </main>
      </div>
    </SuccessContainer>
  )
}