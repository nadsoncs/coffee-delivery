import { Item } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  ADD_AMOUNT_ITEM = 'ADD_AMOUNT_ITEM',
  SUB_AMOUNT_ITEM = 'SUB_AMOUNT_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
}

export function addNewItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
    }
  }
}

export function addAmountItemAction(itemId: string) {
  return {
    type: ActionTypes.ADD_AMOUNT_ITEM,
    payload: {
      itemId
    }
  }
}

export function subAmountItemAction(itemId: string) {
  return {
    type: ActionTypes.SUB_AMOUNT_ITEM,
    payload: {
      itemId
    }
  }
}

export function removeItemAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId
    }
  }
}