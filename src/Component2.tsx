import { useContext } from "react";
import { UserContext } from "./App";
//import styles from "./styles.css";
function Component4() {
    const user1 = useContext(UserContext);
    return (
      <>
        <h6>Component 4</h6>
        <h6>First again: {user1.first}</h6>
        <h6>Last again: {user1.last}</h6>
        <h6>Array again: {JSON.stringify(user1.arrNum)}</h6>
      </>
    );
}
function Component3() {
    return (
    <>
        <h6>Component 3</h6>
        <Component4 />
    </>
    );
}
const Component2 = () => {
    return (
    <>
        <h6>Component 2</h6>
        <Component3 />
    </>
    );
};
export default Component2;