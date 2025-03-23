import { Trash2, CheckCircle } from "lucide-react";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <div className="flex gap-2">
        <CheckCircle
          onClick={() => toggleComplete(todo.id)}
          className="cursor-pointer text-green-500 hover:text-green-700"
        />
        <Trash2
          onClick={() => removeTodo(todo.id)}
          className="cursor-pointer text-red-500 hover:text-red-700"
        />
      </div>
    </div>
  );
};

export default TodoItem;
