import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { SuccessContainer, OrderItem } from "./styles";

import illustration from '../../assets/illustration.svg'

export function Success (){
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
                  <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong>, Farrapos - Porto Alegre, RS</p>
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
                  <p><strong>Cartão de Crédito</strong></p>
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