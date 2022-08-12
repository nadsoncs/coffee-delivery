import { CardContainer } from "./styles";
import coffeeImage from '../../assets/coffee-1.png'
import { Counter } from "../Counter";
import { Trash } from "phosphor-react";
export function CoffeeMinCard() {
  return (
    <CardContainer>
      <div className="info">
        <img src={coffeeImage} alt="" />

        <div>
          <span>Expresso Tradicional</span>
          <div className="controllers">
            <Counter isMin={true} />
            <button className="remove">
              <Trash size={16} className="dollar"/>
              remover
            </button>
          </div>
        </div>
      </div>
      <h4>RS 9,90</h4>
    </CardContainer>
  )
}