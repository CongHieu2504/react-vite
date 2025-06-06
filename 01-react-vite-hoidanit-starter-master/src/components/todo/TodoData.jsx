const TodoData = (props) => {
    // props là một biến Object

    // const { name, age, address } = props;
    const name = props.name;
    const age = props.age;
    const address = props.address;

    console.log(">>> Check pros: ", props)
    return (
        // cach truyen bien props
        <div className='todo-data'>
            <div>My name is {props.name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData