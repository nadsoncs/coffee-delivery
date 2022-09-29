import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react';
import { CounterContainer } from './styles'

interface CounterProps {
  isMin?: boolean;
  amount: number;
  addAmount: () => void;
  subAmount: () => void;
}
export function Counter({
  isMin = false,
  amount,
  addAmount,
  subAmount
}: CounterProps) {

  return (
    <CounterContainer className={isMin ? 'min' : ''}>
      <button onClick={subAmount}><Minus size={14} /></button>
        <span>{amount}</span>
      <button onClick={addAmount}><Plus size={14} /></button>
    </CounterContainer>
  )
}