import { useState } from "react";
import { Todo } from "./types";
import { initTodos } from "./initTodos";
import WelcomeMessage from "./WelcomeMessage";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const uncompletedCount = initTodos.filter(
    (todo: Todo) => !todo.isDone
  ).length; // 未完了タスクの数え上げ
  console.log(JSON.stringify(todos, null, 2));

  return (
    <div className="mx-4 mt-10 max-w-2xl md:mx-auto">
      <h1 className="mb-4 text-2xl font-bold">TodoApp</h1>
      <div className="mb-4">
        <WelcomeMessage
          name="aaaaa"
          uncompletedCount={uncompletedCount}
        />
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;