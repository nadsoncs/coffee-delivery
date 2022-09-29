import { produce } from 'immer'
import { ActionTypes } from './actions'
export interface Item {
  id: string;
  name: string;
  price: number;
  cover: string;
  amount: number;
}
interface CartState {
  itens: Item[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.itens.push(action.payload.newItem);
      })
    case ActionTypes.ADD_AMOUNT_ITEM: {
      const itemIndex = state.itens.findIndex((item) => {
        return item.id === action.payload.itemId
      })
      if( itemIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.itens[itemIndex].amount++
      })
    }
    case ActionTypes.SUB_AMOUNT_ITEM: {
      const itemIndex = state.itens.findIndex((item) => {
        return item.id === action.payload.itemId
      })
      if( itemIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.itens[itemIndex].amount--
      })
    }
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        draft.itens = state.itens.filter(item => item.id !== action.payload.itemId)
      })
    default:
      return state
  }
}