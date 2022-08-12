import { CoffeeCard } from '../../components/CoffeeCard'
import { Hero } from '../../components/Hero'
import { HomeContainer } from './styles'
export function Home() {
  return (
    <HomeContainer>
      <Hero/>

      <main>
        <h2>Nossos cafés</h2>

        <div className="list">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />

        </div>
      </main>
    </HomeContainer>
  )
}