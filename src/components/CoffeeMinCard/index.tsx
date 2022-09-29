import { useContext } from "react";
import { CartContext } from '../../context/cartContext';
import { Trash } from "phosphor-react";

import { CardContainer } from "./styles";
import { Counter } from "../Counter";

import { Item } from '../../reducers/cart/reducer'

export function CoffeeMinCard({
  id,
  name,
  price,
  cover,
  amount,
}: Item) {
  const { addAmountItem, subAmountItem, removeItem } = useContext(CartContext)
  
  const priceFormated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price/100)

  function handleAddAmount() {
    addAmountItem(id)
  }
  function handleSubAmount() {
    subAmountItem(id)
  }
  function handleRemoveItem() {
    removeItem(id)
  }
  return (
    <CardContainer>
      <div className="info">
        <img src={cover} alt="" />

        <div>
          <span>{name}</span>
          <div className="controllers">
            <Counter 
              isMin={true}
              amount={amount}
              addAmount={handleAddAmount}
              subAmount={handleSubAmount}
            />
            <button className="remove" onClick={handleRemoveItem}>
              <Trash size={16} className="dollar"/>
              remover
            </button>
          </div>
        </div>
      </div>
      <h4>{priceFormated}</h4>
    </CardContainer>
  )
}