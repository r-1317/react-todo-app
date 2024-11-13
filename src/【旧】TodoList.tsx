import React from "react";
import { Todo } from "./types";
import dayjs from "dayjs";

type Props = {
  todos: Todo[];
  updateIsDone: (id: string, value: boolean) => void; // ◀◀ 追加
};

const TodoList = (props: Props) => {
  // const todos = [...props.todos].sort((a, b) => a.priority - b.priority);
  const todos = props.todos;

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
          <input
            type="checkbox"
            checked={todo.isDone} // ◀◀ 注目
            onChange={(e) => props.updateIsDone(todo.id, e.target.checked)}
            className="mr-1.5 cursor-pointer"
          />
          <span className="text-gray-500">{todo.isDone ? "【完了】" : ""}</span>{" "}
          <strong>{todo.name}</strong>{" "}
          {todo.deadline && (
            <span>
              期限: {dayjs(todo.deadline).format("YYYY年MM月DD日-hh:mm")}
            </span>
          )}
          <span className="text-gray-500">優先度:</span>{" "}
          <span className="text-yellow-500">
            {"★".repeat(todo.priority)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
