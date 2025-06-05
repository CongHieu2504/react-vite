import './components//todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'

const App = () => {

  const name = "Cong Hieu"
  const age = 22
  const address = {
    city: "Ho Chi Minh",
    country: "Viet Name"
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
        address={address}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
