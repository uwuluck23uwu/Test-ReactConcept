import { createContext,useContext, useReducer} from "react"
import  products  from "../data/product"
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const initState = {
    products:products,
    total:0,
    amount:0
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initState);

    return (
      <CartContext.Provider value={{ ...state }}>
        {children} {/* คอมโพเนนต์ที่จะทำ value ไปใช้งาน */}
      </CartContext.Provider>
    );
  };
  
export const useCart = () => {
    return useContext(CartContext);
}
