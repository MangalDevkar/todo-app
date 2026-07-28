/**
 * Todo App Component
 * Manages all todo state and functionality
 * Features: Add, Edit, Delete, Complete tasks
 */

import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add a new to-do item
  const addTodo = () => {
    if (inputValue.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Delete a to-do item
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Mark to-do as completed
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Start editing a to-do
  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  // Save edited to-do
  const saveEdit = (id) => {
    if (editText.trim() === '') return;
    
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editText } : todo
    ));
    setEditId(null);
    setEditText('');
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditId(null);
    setEditText('');
  };

  // Handle Enter key in input
  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <div className="container">
        <Header />
        
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleInputKeyPress}
            placeholder="Add a new task..."
          />
          <button onClick={addTodo}>Add Task</button>
        </div>

        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          startEdit={startEdit}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />

        {todos.length > 0 && (
          <div className="progress-counter">
            <p>
              <strong>{todos.filter(t => t.completed).length}</strong> of{' '}
              <strong>{todos.length}</strong> tasks completed
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;