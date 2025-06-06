import './components//todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, settodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
  ])

  const name = "Cong Hieu"
  const age = 22
  const address = {
    city: "Ho Chi Minh",
    country: "Viet Name"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  // addNewTodo("Cong hieu")

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        address={address}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
