import { useState } from "react";

const TodoNew = (props) => {

    //useState hook 
    // const valueInput = "Cong Hieu";
    const [valueInput, setValueInput] = useState("Cong Hieu");

    const { addNewTodo } = props;

    // addNewTodo("Hieu");

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput(""); // reset input value
    }

    // Thêm sự kiện event.target.value: để lấy giá trị của input
    const handleOnChange = (name) => {
        // console.log(">>> handleOnchange", event.target.value);
        // console.log(">>> handleOnchange", name);
        setValueInput(name);
    }

    return (
        <div className='todo-new'>
            {/* <input type="text" onChange={handleOnChange} /> */}
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>

            <div>
                My test input: {valueInput}
            </div>
        </div>
    )
}

export default TodoNew