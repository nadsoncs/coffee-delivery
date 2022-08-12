import { NavLink } from 'react-router-dom'
import { MapPinLine, ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer" className={"location"}>
          <MapPinLine size={22} weight="fill"/>
          Porto Seguro, BA
        </NavLink>
        <NavLink to="/" title="Histórico" className={"cart"}>
          <ShoppingCart size={22} weight="fill"/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}