import { taskRouter } from "~/server/api/routers/task";
import ToDos from "./ToDos";

export default function CurrentToDo() {
  const getTasks = taskRouter.getTasks;
  return <ToDos title="Current Tasks" tasks={getTasks} />;
}
