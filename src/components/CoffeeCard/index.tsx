import { CardContainer } from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import coffeeImage from '../../assets/coffee-1.png'
import { Counter } from '../Counter'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={coffeeImage} alt="" />
      <div className="tags">
        <span>tradicional</span>
      </div>

      <div className="content">
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>

      <footer>
        <div className="price">
          <span>R$ </span>
          <h3>9,90</h3>
        </div>

        <Counter />
        <button className="cartButton"><ShoppingCart size={22}/></button>
      </footer>
    </CardContainer>
  )
}