type CartState = {
    items: { id: string; name: string; price: number }[];
    total: number;
  };
  
  type CartAction =
    | {
        type: "ADD_ITEM";
        item: { id: string; name: string; price: number };
      }
    | { type: "REMOVE_ITEM"; id: string };
  
  const CartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          items: [...state.items, action.item],
          total: state.total + action.item.price,
        };
  
      case "REMOVE_ITEM":
        const updatedItems = state.items.filter((item) => item.id !== action.id);
        const removedItem = state.items.find((item) => item.id === action.id);
        return {
          items: updatedItems,
          total: removedItem ? state.total - removedItem.price : state.total,
        };
  
      default:
        return state;
    }
  };
  
  export default CartReducer;