import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container/Container";
import { checkUserAC } from "./redux/thunk/loginAC";

function App() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  if (!users.name) {
    dispatch(checkUserAC());
  }

  return (
    <div className="App">
      <Container/>
    </div>
  );
}

export default App;
