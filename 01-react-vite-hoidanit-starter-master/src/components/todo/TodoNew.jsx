const TodoNew = (props) => {
    console.log(">>> Check point", props)
    const { addNewTodo } = props;

    // addNewTodo("Hieu");

    const handleClick = () => {
        alert("Click me");
    }

    // Thêm sự kiện event.target.value: để lấy giá trị của input
    const handleOnChange = (name) => {
        // console.log(">>> handleOnchange", event.target.value);
        console.log(">>> handleOnchange", name);
    }

    return (
        <div className='todo-new'>
            {/* <input type="text" onChange={handleOnChange} /> */}
            <input type="text" onChange={() => handleOnChange(event.target.value)} />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew