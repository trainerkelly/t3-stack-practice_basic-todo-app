interface Props {
  title: string;
}

export default function ToDos({ title }: Props) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
