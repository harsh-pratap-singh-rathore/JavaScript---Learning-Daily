# 📝 Simple & Persistent To-Do App

A clean, responsive, and lightweight To-Do application built with pure HTML5 and Vanilla JavaScript. It offers quick task management and automatic state persistence across browser sessions using the `localStorage` Web API.

---

## ✨ Features

- **Local Storage Persistence**: Your tasks are saved automatically in your browser's local storage so they remain safe even if you refresh or close the tab.
- **Easy Task Management**: Add tasks, mark them as completed with visual line-through styling, and delete them individually with a single click.
- **Clean Code Architecture**: Robust DOM-manipulation logic, clean separation of concerns, and automatic list refreshing.

---

## 🛠️ Technical Details & Refactoring

This project recently underwent a major code cleanup and bug-fixing phase:
1. **Dynamic Input Evaluation**: Fixed a variable scoping bug where the input element's value was read only once when the page loaded. Now, the value is evaluated dynamically on every task submission.
2. **UI Duplication Protection**: Refactored the `rendertasks()` function to clear the existing task list from the DOM before rendering to avoid duplicated task items.
3. **Correct Scope Loops**: Resolved a bug inside the iteration loops where stale input variables were used instead of the active task parameter.
4. **Optimized Input Behavior**: Moved the clearing of the input box logic directly to the task creation lifecycle rather than during list rendering.

---

## 🚀 How to Run Locally

Since this application runs entirely on client-side Web APIs, no local server or installation is required:

1. Clone or download this project folder.
2. Double-click the `todo.html` file to launch it directly in your web browser.
3. Enter your task and hit the **Add Task** button!
