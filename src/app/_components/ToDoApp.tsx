import AddToDo from "./AddToDo";
import CompletedToDo from "./CompletedToDo";
import CurrentToDo from "./CurrentToDo";

export default function ToDoApp() {
  return (
    <div>
      <h1>To-Do App</h1>
      <AddToDo />
      <CurrentToDo />
      <CompletedToDo />
    </div>
  );
}
