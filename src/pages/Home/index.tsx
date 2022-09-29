import { CoffeeCard } from '../../components/CoffeeCard'
import { Hero } from '../../components/Hero'
import { HomeContainer } from './styles'

import { COFFEES } from '../../utils/coffees'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
export function Home() {
  const {itens} = useContext(CartContext)
  return (
    <HomeContainer>
      <Hero/>
      <main>
        <h2>Nossos cafés</h2>

        <div className="list">
          {
            COFFEES.map( coffee => {
              return (
                <CoffeeCard 
                  key={coffee.id}
                  id={coffee.id} 
                  name={coffee.name}
                  description={coffee.description}
                  price={coffee.price} 
                  cover={coffee.cover} 
                  tags={coffee.tags}
                />
              )
            })
          }
        </div>
      </main>
    </HomeContainer>
  )
}