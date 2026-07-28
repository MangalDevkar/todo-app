function ToDoItem({
  todo,
  deleteTodo,
  toggleComplete,
  startEdit,
  isEditing,
  editText,
  setEditText,
  saveEdit,
  cancelEdit,
}) {
  const handleSaveKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveEdit(todo.id);
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleSaveKeyPress}
            autoFocus
          />
          <button className="save-btn" onClick={() => saveEdit(todo.id)}>
            Save
          </button>
          <button className="cancel-btn" onClick={cancelEdit}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span className={`task-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <div className="task-actions">
        <button
          className="edit-btn"
          onClick={() => startEdit(todo.id, todo.text)}
        >
          ✎ Edit
        </button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;