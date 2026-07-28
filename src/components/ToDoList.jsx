import ToDoItem from './ToDoItem';

function ToDoList({
  todos,
  deleteTodo,
  toggleComplete,
  startEdit,
  editId,
  editText,
  setEditText,
  saveEdit,
  cancelEdit,
}) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add one to get started! 🚀</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          startEdit={startEdit}
          isEditing={editId === todo.id}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList;