import { useReducer } from "react";
import CartReducer from "./Components/CartReducer"; 
import "./App.css";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [state, dispatch] = useReducer(CartReducer, { items: [], total: 0 });
  const[countStorage, setCountStorage] = useLocalStorage("counter","khulyso");

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
            item: { id: "2", name: "laptop", price: 2000 },
          })
        }
      >
        Add laptop
      </button>
    </div>
  );
}

export default App;