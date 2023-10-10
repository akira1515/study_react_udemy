import {useState} from "react";

const Form = ({createTodo}) => {
    const [newEnterTodo, setNewTodo] = useState("");
    const addNewTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random()* 1e5),
            content: newEnterTodo,
        }
        createTodo(newTodo);
        setNewTodo("");
    }
    return(
        <div>
            <form onSubmit={addNewTodo}>
                <input type="text" value={newEnterTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button>追加</button>
            </form>
        </div>
    );
}

export default Form;