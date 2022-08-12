import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { CoffeeMinCard } from '../../components/CoffeeMinCard';

import { CheckoutContainer, FormAddress, Payment, CoffeesSelected, ConfirmationButton } from './styles'
export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <FormAddress>
          <header>
            <MapPinLine size={22} className="map"/>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <div className="inputContainer"> 
            <input type="text" placeholder="CEP" className="inputMd"/>
            
            <input type="text" placeholder="Rua" className="road"/>

            <div className="inputGroup">
              <input type="text" placeholder="Número" className="inputMd"/>
              <input type="text" placeholder="Complemento" className="inputFlex"/>
              <span>Opcional</span>
            </div>

            <div className="inputGroup">
              <input type="text" placeholder="Bairro" className="inputMd"/>
              <input type="text" placeholder="Cidade" className="inputFlex"/>
              <input type="text" placeholder="UF" className="inputSm"/>
            </div>
          </div>
        </FormAddress>

        <Payment>
          <header>
            <CurrencyDollar size={22} className="dollar"/>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <div className="paymentType">
            <button>
              <CreditCard size={16} className="dollar"/>
              cartão de crédito
            </button>
            <button>
              <Bank  size={16} className="dollar"/>
              cartão de débito
            </button>
            <button>
              <Money size={16} className="dollar"/>
              dinheiro
            </button>
          </div>
        </Payment>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <CoffeesSelected>
          <CoffeeMinCard />
          <hr />
          <CoffeeMinCard />
          <hr />

          <table>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>RS 29,70</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>RS 3,50</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td>Total</td>
                <td>RS 33,20</td>
              </tr>
            </tfoot>
          </table>
          <ConfirmationButton>CONFIRMAR PEDIDO</ConfirmationButton>
        </CoffeesSelected>
      </div>
    </CheckoutContainer>
  );
}