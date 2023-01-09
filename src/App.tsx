import { useState, createContext } from "react";
import Component2 from "./Component2";

///////////////////////////////////////////////////////////////
// Part A - String update
const initialState: string = "John Doe"; // this also works
export const UserContext = createContext<typeof initialState>(initialState);
export default function App() {
  const [user1, setUser1] = useState(initialState);
  return (
    <UserContext.Provider value={user1}>
      <h6>{`Hello ${user1}!`}</h6>
      <Component2 />
      <button onClick={() => setUser1("TLC")}>Change context</button>
    </UserContext.Provider>
  );
}
