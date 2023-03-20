import { useState } from "react";

import "./Todo.css";

export function Todo({ title, handleRemove, handleEdit }) {

    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState(title)

  return (
    <div className="todo">
        {isEditing ? <input placeholder="axali" onChange={(e) => setInputValue(e.target.value)}/> : <p>{inputValue}</p>}
      <div>
        <button onClick={() => handleRemove(title)}>remove</button>
        <button onClick={() => {setIsEditing(!isEditing)}}>{isEditing ? 'save' : 'edit'}</button>    
      </div>
    </div>
  );
}

