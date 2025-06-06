const TodoData = (props) => {
    // props là một biến Object

    const { todoList } = props;
    // const name = props.name;
    // const age = props.age;
    // const address = props.address;

    console.log(">>> Check pros: ", todoList)
    return (
        // cach truyen bien props
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log(">>> Check map:", item, index)
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button style={{ cursor: "pointer" }}>Delete</button>
                    </div>)
            })}

        </div>
    )
}

export default TodoData