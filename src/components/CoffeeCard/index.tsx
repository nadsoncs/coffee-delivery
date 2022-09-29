import { CardContainer } from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import coffeeImage from '../../assets/coffee-1.png'
import { Counter } from '../Counter'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';

interface Props {
  id: string;
  name: string;
  description: string;
  price: number,
  cover: string,
  tags: string[]
}
export function CoffeeCard({
  id, name, description, price, cover, tags
}: Props) {
  const [amount, setAmount] = useState(1);
  const { addNewItem } = useContext(CartContext)

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price/100)

  function handleAddNewItem() {
    addNewItem(
      {
        id,
        name,
        price,
        cover,
        amount
      }
    )
  }
  
  function handleAddAmount() {
    if( amount < 99 ) {
      setAmount(amount + 1)
    }
  }
  function handleSubAmount() {
    if( amount > 1 ) {
      setAmount(amount - 1)
    }
  }
  return (
    <CardContainer>
      <img src={cover} alt="" />
      <div className="tags">
        { tags.map(tag => {
          return (<span>{tag}</span>)
        })}
        
      </div>

      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <footer>
        <div className="price">
          <h3>{priceFormatted}</h3>
        </div>

        <Counter
          amount={amount}
          addAmount={handleAddAmount}
          subAmount={handleSubAmount}
        />
        <button 
          className="cartButton"
          onClick={handleAddNewItem}
        ><ShoppingCart size={22}/></button>
      </footer>
    </CardContainer>
  )
}