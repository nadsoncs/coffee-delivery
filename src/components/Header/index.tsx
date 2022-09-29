import { NavLink } from 'react-router-dom'
import { MapPinLine, ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'


export function Header() {
  const {itens} = useContext(CartContext)
  
  const cartAmount = itens.length
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Local" className={"location"}>
          <MapPinLine size={22} weight="fill"/>
          Porto Seguro, BA
        </NavLink>
        <NavLink to="/checkout" title="Checkout" className={"cart"}>
          <ShoppingCart size={22} weight="fill"/>
          { cartAmount > 0 && <span>{cartAmount}</span>}         
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}