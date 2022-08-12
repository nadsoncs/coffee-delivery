import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  isMin?: boolean
}
export function Counter({isMin = false}: CounterProps) {
  return (
    <CounterContainer className={isMin ? 'min' : ''}>
      <button><Minus size={14} /></button>
        <span>1</span>
      <button><Plus size={14} /></button>
    </CounterContainer>
  )
}