import { useState, createContext } from "react";
import Component2 from "./Component2";
//const initialState: string = "John Doe";
const initialState: number[] = [1, 2];
export const UserContext = createContext<typeof initialState>(initialState);
export default function App() {
const [arr, setArr] = useState(initialState);
return (
  <UserContext.Provider value={arr}>
    <h6>{`Array: ${JSON.stringify(arr)}`}</h6>
    <Component2 />
    <button
      onClick={() => {
        setArr([...arr, arr.length + 1]);
        console.log(arr);
      }}
    >
      Add to array
    </button>
  </UserContext.Provider>
);
}
