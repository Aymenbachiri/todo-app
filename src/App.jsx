import { useEffect, useState } from "react";
import Todo from "./Todo";
import { AiOutlinePlus } from "react-icons/ai";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Create todo
  const createtodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);
  // update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <>
      <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
        <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4  mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 p-2">
            Todo App
          </h3>
          <form onSubmit={createtodo} className="flex justify-between">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border rounded-xl outline-none p-2 w-full text-xl"
              type="text"
              placeholder="Add Todo"
            />
            <button
              type="submit"
              className="border rounded-full p-4 ml-2 bg-purple-500 hover:bg-purple-700 text-slate-100"
            >
              <AiOutlinePlus size={30} />
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
          {todos.length < 1 ? null : (
            <p className="text-center p-2">
              {" "}
              {`You have ${todos.length} task`}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
