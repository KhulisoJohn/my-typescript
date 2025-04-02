import { useReducer } from "react";
import CartReducer from "./Components/CartReducer"; 
import "./App.css";
import useLocalStorage from "./Hooks/useLocalStorage";
import customHook from "./Hooks/customHook";

function App() {
  const [state, dispatch] = useReducer(CartReducer, { items: [], total: 0 });
  const [countStorage, setCountStorage] = useLocalStorage<number>("counter", 0); // ✅ Fixed type

  return (
    <div>
      <h2>Total: ${state.total}</h2>
      {state.items.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            item: { id: "1", name: "Phone", price: 200 },
          })
        }
      >
        Add phone
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            item: { id: "2", name: "Laptop", price: 2000 },
          })
        }
      >
        Add laptop
      </button>

      {/* ✅ Example usage of countStorage */}
      <h2>Counter: {countStorage}</h2>
      <button onClick={() => setCountStorage(countStorage + 1)}>Increase Counter</button>
      <button onClick={() => setCountStorage(0)}>Reset Counter</button>

    
      <  customHook />
    </div>
  );
}

export default App;