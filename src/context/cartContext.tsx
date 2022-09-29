import { 
  createContext,
  ReactNode,
  useReducer,
} from "react";
import { addAmountItemAction, addNewItemAction, removeItemAction, subAmountItemAction } from "../reducers/cart/actions";
import { cartReducer, Item } from "../reducers/cart/reducer";

interface CartContext {
  itens: Item[];
  addNewItem: (item: Item) => void;
  addAmountItem: (itemId: string) => void;
  subAmountItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
}
interface CartContextProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContext)

export function CartContextProvider ({children}: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      itens: []
    }
  )

  const { itens } = cartState

  function addNewItem(newItem: Item) {
    dispatch(addNewItemAction(newItem))
  }

  function addAmountItem(itemId: string) {
    dispatch(addAmountItemAction(itemId))
  }

  function subAmountItem(itemId: string) {
    dispatch(subAmountItemAction(itemId))
  }

  function removeItem(itemId: string) {
    dispatch(removeItemAction(itemId))
  }
  return (
    <CartContext.Provider
      value={{
        itens,
        addNewItem,
        addAmountItem,
        subAmountItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}