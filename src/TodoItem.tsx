import React from "react";
import { Todo } from "./types";
import dayjs from "dayjs";

type Props = {
  todo: Todo;
  updateIsDone: (id: string, value: boolean) => void;
  // remove: (id: string) => void;
};

const TodoItem = (props: Props) => {
  const todo = props.todo;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center rounded-md bg-gray-200">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={(e) => props.updateIsDone(todo.id, e.target.checked)}
          className="mr-1.5 cursor-pointer"
        />
        <span className="text-gray-500">{todo.isDone ? "【完了】" : ""}</span>{" "}
        {todo.isDone ? <span className="text-gray-500"><s>{todo.name}</s></span> : todo.name}
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
      <div>
        {/* <button
          onClick={() => props.remove(todo.id)}
          className="rounded-md bg-slate-200 px-2 py-1 text-sm font-bold text-white hover:bg-red-500"
        >
          削除
        </button> */}
      </div>
    </div>
  );
};

export default TodoItem;