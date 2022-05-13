import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { checkUserAC } from "./redux/thunk/loginAC";

function App() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  if (!users.name) {
    dispatch(checkUserAC());
  }

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
