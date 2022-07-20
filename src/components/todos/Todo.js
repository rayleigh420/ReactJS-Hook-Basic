import React from "react";

const Todo = (props) => {
    const { listTodo } = props;

    return (
        <ul>
            {listTodo.map(item => (
                <li key={item.id}>
                    {item.author}
                </li>
            ))}
        </ul>
    )
}

export default Todo