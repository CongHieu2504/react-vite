import './components//todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" }
  ])

  const deleteTodo = (id) => {
    // dùng filter để lọc ra những phần tử không có id trùng với id cần xóa
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo);
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000), // random id from 3 to 1000
      name: name
    }

    //array.push: gọi lại hàm setTodoList
    setTodoList([...todoList, newTodo])
  }

  // addNewTodo("Cong hieu")

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />

        {todoList.length > 0 &&
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
        }

        {/* điều kiện nếu cái chiều dài nó rỗng thì nó sẽ render ra hình ảnh */}
        {todoList.length === 0 &&
          <div className='todo-image'>
            <img src={ReactLogo} className='logo' />
          </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default App
