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

  return (
    <div className="App">
      <div className="todo">
        <h1>TO DO LISTS</h1>
        <h3>
          Hi here is a place where you can write all the thing you want to do
          for this week
        </h3>
        <input type={"text"} placeholder={"Add a todo"} />
        <input type={"button"} value={"Submit"}/>
        {todos.map(value => <li>{value.todo}</li>)}
      </div>
     </div>
  );
}

export default App;
