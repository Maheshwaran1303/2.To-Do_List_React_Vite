import { useState } from "react";
import { Plus } from "lucide-react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
        <Plus size={20} />
      </button>
    </form>
  );
};

export default TodoForm;
