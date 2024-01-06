import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 rounded-xl p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 rounded-xl p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer my-auto w-[380px]`,
  textComplete: `ml-2 cursor-pointer line-through my-auto w-[380px]`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button
        className="hover:bg-black/50 rounded-full p-2"
        onClick={() => deleteTodo(todo.id)}
      >
        {<FaRegTrashAlt />}{" "}
      </button>
    </li>
  );
};

export default Todo;
