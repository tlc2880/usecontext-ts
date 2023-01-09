import { useState, createContext } from "react";
import Component2 from "./Component2";
const initialState = {
  first: "John",
  last: "Doe",
  arrNum: [1, 2],
  counter: 0
};
export const UserContext = createContext<typeof initialState>(initialState);
export default function App() {
  const [obj, setObj] = useState(initialState);
  const [addVal, setAddVal] = useState(1);
  const AddInput = () =>
    setObj({
      ...obj,
      counter: obj.counter + addVal
    });
  return (
    <UserContext.Provider value={obj}>
      <h6>Counter: {obj.counter}</h6>
      <h6>First: {obj.first}</h6>
      <h6>Last: {obj.last}</h6>
      <h5>{`Array: ${JSON.stringify(obj.arrNum)}`}</h5>
      <button
        onClick={() => {
          setObj({ ...obj, counter: obj.counter + 1 });
          console.log(obj);
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          setObj({ ...obj, counter: obj.counter - 1 });
          console.log(obj);
        }}
      >
        Dec
      </button>
      <input
        type="number"
        value={addVal}
        onChange={(e) => setAddVal(parseInt(e.target.value, 10))}
      />
      <button onClick={AddInput}>Add Input</button>
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
      <Component2 />
    </UserContext.Provider>
  );
}
