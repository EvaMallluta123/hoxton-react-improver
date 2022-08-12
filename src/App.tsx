import { useState , useEffect} from "react";
import "./App.css";
import { Todo } from "./type";

function App() {
  const [count, setCount] = useState(0);
 const[todos, setTodos]=useState<Todo[]>([])
 useEffect(()=>{
  fetch("http://localhost:3005/todos")
  .then(resp=>resp.json())
  .then(todoFromServer=>setTodos(todoFromServer))
 },[])
function createTodo(todo: string){
  let newTodo={
    text: todo,
  }
  fetch("http://localhost:3005/todos",
  {
    method:"Post",
    headers:{
      "Content type": "application/json"
    },
    body:JSON.stringify(newTodo)
  })
  .then(resp=>resp.json())
  .then(todoFromServer=>{setTodos([...todos,todoFromServer ])
  })
}
  return (
    <div className="App">
      <div className="todo">
        <h1>TO DO LISTS</h1>
        <h3>
          Hi here is a place where you can write all the thing you want to do
          for this week
        </h3>
        <form onSubmit={event=>{
          event.preventDefault()
          createTodo(event.target.text.value)
          event.target.reset()
        }}>
        <input type={"text"} placeholder={"Add a todo"} name="text" required minLength={5}/>
        <input type={"button"} value={"Submit"}/>
        </form>
        {todos.map(value => <li>{value.todo}</li>)}
      </div>
     </div>
  );
}

export default App;
