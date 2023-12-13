import { useReducer } from "react";
import "./counter.css";



const reducer = (state, action) => {
    if (action.type === "increment") {
        return state + 1;
    }
    if (action.type === "decrement") {
        return state - 1;
    }
    return state;
}
const Counter = () => {
    const initialstate = 0;
    const [state, dispatch] = useReducer(reducer, initialstate);


    return (
        <>
            <div className="main-div">
                <div className="counter-div">
                    <div>
                        <h1 className="counter">{state}</h1>
                    </div>
                    <div className="btn">
                        <button onClick={() => state > 0 ? dispatch({ type: "decrement" }) : dispatch({ type: "null" })}>DEC</button>
                        <button onClick={() => dispatch({ type: "increment" })}>INC</button>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Counter;