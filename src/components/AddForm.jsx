import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(task));
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">Add</button>
        </form>
    );
    }