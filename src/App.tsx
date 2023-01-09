import { useState, createContext } from "react";
import Component2 from "./Component2";
//const initialState: string = "John Doe";
const initialState = {
  first: "John",
  last: "Doe"
};
export const UserContext = createContext<typeof initialState>(initialState);
export default function App() {
  const [user1, setUser1] = useState(initialState);
  return (
    <UserContext.Provider value={user1}>
      <h6>First: {user1.first}</h6>
      <h6>Last: {user1.last}</h6>
      <Component2 />
      <button onClick={() => setUser1({ first: "James", last: "Smith" })}>
        Change context
      </button>
    </UserContext.Provider>
);
}
