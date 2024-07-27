import { createContext,useContext, useReducer} from "react"
import { cartReducer } from "../reducer/cartReducer"
import  products  from "../data/product"

const CartContext = createContext();

const initState = {
    products:products,
    total:0,
    amount:0
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  function formatMoney(money){
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

    return (
      <CartContext.Provider value={{ ...state, formatMoney }}>
        {children} {/* คอมโพเนนต์ที่จะทำ value ไปใช้งาน */}
      </CartContext.Provider>
    );
  };
  
export const useCart = () => {
    return useContext(CartContext);
}
