import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tables from "./Tables";
import Forms from "./Forms";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tables" element={<Tables />}></Route>
        <Route path="/forms" element={<Forms />}></Route>
        <Route path="/todolist" element={<TodoList />}></Route>
      </Routes>
    </div>
  );
}
