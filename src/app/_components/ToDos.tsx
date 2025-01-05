interface Props {
  title: string;
  tasks: string;
}

export default function ToDos({ title, tasks }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {{ tasks }?.data?.map((task) => {
          <div key={task.id}>
            <input
              id={`check-${task.id}`}
              type="checkbox"
              checked={!!task.done}
            />
            <label htmlFor={`check-${task.id}`}>{task.task}</label>
          </div>;
        })}
      </div>
    </div>
  );
}
