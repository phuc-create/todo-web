import React, { useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit ?
                    (
                        <div>
                            <input type='text'
                                placeholder="Update your to do!!!"
                                className="todo-input"
                                name="todo"
                                id="todo"
                                value={input}
                                onChange={handleChange}>
                            </input>
                            <button type="submit" className="todo-button" name="submit">Update</button>
                        </div>
                    ) :
                    (<div>
                        <input type="text"
                            placeholder="add a todo"
                            className="todo-input"
                            name="todo"
                            id="todo"
                            value={input}
                            onChange={handleChange}></input>
                        <button type="submit" className="todo-button" name="submit">Create</button>
                    </div>
                    )
                }
            </form>
        </div>
    )
}

export default TodoForm;
