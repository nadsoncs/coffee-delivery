import { Coffee, Package, Timer, ShoppingCart} from 'phosphor-react'
import { 
  HeroContainer,
  Info,
  Title,
  Subtitle,
  Itens,
  Item,
} from './styles'

import coffee from '../../assets/coffee.png'

export function Hero() {
  return (
    <HeroContainer>
      <Info>
        <Title>
          Encontre o café perfeito  <br />
          para qualquer hora do dia
        </Title>
        
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </Subtitle>
        <Itens>
          <Item>
            <div className='cart'>
              <ShoppingCart size={16} weight="fill"/>
            </div>
            <span>Compra simples e segura</span>
          </Item>

          <Item>
            <div className='timer'>
              <Timer size={16} weight="fill"/>
            </div>
            <span>Entrega rápida e rastreada</span>
          </Item>

          <Item>
            <div className='package'>
              <Package size={16} weight="fill"/>
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Item>

          <Item>
            <div className='coffee'>
              <Coffee size={16} weight="fill"/>
            </div>
            <span>O café chega fresquinho até você </span>
          </Item>
        </Itens>
      </Info>
      <img src={coffee} alt="" />
    </HeroContainer>
  )
}