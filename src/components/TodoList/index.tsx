import { useState } from "react";

const TodoList = () => {
    let [paises, setPaises] = useState<string[]>(["Brasil", "Argentina", "Uruguai"]);

    return (
        <>
            <label htmlFor="a">
                <input type="checkbox" name="a" id="a" />
                 a
            </label>
        </>

    )
}


export default TodoList;