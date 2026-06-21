# Todo App

A feature-rich todo application with drag-and-drop reordering, task filtering, and a clean responsive interface. Built with React, dnd-kit, and SCSS.

---

## Features

- Create, complete, and delete todos
- Drag-and-drop reordering with dnd-kit
- Filter todos: All / Active / Completed
- Clear completed tasks in one click
- Track remaining item count
- Responsive design with custom SCSS
- Smooth animations and transitions

## Tech Stack

- **Framework:** Vite + React 18
- **Language:** JavaScript (JSX)
- **Drag & Drop:** @dnd-kit/core
- **Styling:** SCSS Modules
- **Testing:** Vitest
- **Linting:** ESLint

## Getting Started

```bash
git clone https://github.com/dev0xgenius/Todo-App.git
cd Todo-App
npm install
npm run dev
```

## Project Structure

```
src/
  components/
    Dashboard/Dashboard.jsx     # Main app logic + state
    Header/Header.jsx           # App header
    Todo/Todo.jsx               # Individual todo item
    Todos/Todos.jsx             # Todo list with dnd context
    TodoForm/TodoForm.jsx       # Create new todo input
    TodosTracker/TodosTracker.jsx # Item count + clear
    ToolBar/ToolBar.jsx         # Filter buttons
    Button/Button.jsx           # Reusable button
  scss/                         # SCSS styles
  assets/                       # Icons
```

## Author

**0xgenius** - [GitHub](https://github.com/dev0xgenius)
