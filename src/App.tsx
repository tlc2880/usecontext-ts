import { useState, createContext } from "react";
import Component2 from "./Component2";
//const initialState: string = "John Doe";
const initialState = {
  first: "John",
  last: "Doe",
  arrNum: [1, 2]
};
export const UserContext = createContext<typeof initialState>(initialState);
export default function App() {
  const [obj, setObj] = useState(initialState);
  return (
    <UserContext.Provider value={obj}>
      <h6>First: {obj.first}</h6>
      <h6>Last: {obj.last}</h6>
      <h6>{`Array: ${JSON.stringify(obj.arrNum)}`}</h6>
      <Component2 />
      <button
        onClick={() => {
          setObj({
            ...obj,
            arrNum: [...obj.arrNum, obj.arrNum.length + 1]
          });
          console.log(obj);
        }}
      >
        Add to array
      </button>
      <button
        onClick={() => {
          setObj({
            ...obj,
            first: "James",
            last: "Smith"
          });
          console.log(obj);
        }}
      >
        Change Name
      </button>
    </UserContext.Provider>
  );
}
