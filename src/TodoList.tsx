import React from "react";
import { Todo } from "./types";

type Props = {
  todos: Todo[];
};

const TodoList = (props: Props) => {
  const todos = [...props.todos].sort((a, b) => a.priority - b.priority);

  if (todos.length === 0) {
    return (
      <div className="text-red-500">
        現在、登録されているタスクはありません。
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {todos.map((todo) => (
        <div key={todo.id}>
          <span className="text-gray-600">{todo.isDone ? '【完了】' : ''}</span> <strong>{todo.name}</strong> <span className="text-gray-500">優先度:</span> <span className="text-yellow-500">{"★".repeat(4 - todo.priority)}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;