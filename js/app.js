const STORAGE_KEY = "taskflow_tasks_v1";

const defaultTasks = [
  { id: 1, title: "Create GitHub repository", category: "Deployment", completed: true },
  { id: 2, title: "Push the project to GitHub", category: "Development", completed: false },
  { id: 3, title: "Deploy the website", category: "Deployment", completed: false }
];

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultTasks;
let currentFilter = "all";

const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("taskModal");
const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskCategory = document.getElementById("taskCategory");

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render() {
  const search = searchInput.value.toLowerCase().trim();

  const visibleTasks = tasks.filter(task => {
    const matchesFilter =
      currentFilter === "all" ||
      (currentFilter === "pending" && !task.completed) ||
      (currentFilter === "completed" && task.completed);

    const matchesSearch = task.title.toLowerCase().includes(search);
    return matchesFilter && matchesSearch;
  });

  taskList.innerHTML = "";

  visibleTasks.forEach(task => {
    const item = document.createElement("div");
    item.className = `task ${task.completed ? "completed" : ""}`;

    item.innerHTML = `
      <button class="check" aria-label="Toggle task">${task.completed ? "✓" : ""}</button>
      <div class="task-info">
        <div class="task-title"></div>
        <div class="task-meta">
          <span class="category"></span>
          <span>${task.completed ? "Completed" : "Pending"}</span>
        </div>
      </div>
      <button class="delete-btn" aria-label="Delete task">&times;</button>
    `;

    item.querySelector(".task-title").textContent = task.title;
    item.querySelector(".category").textContent = task.category;

    item.querySelector(".check").addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      render();
    });

    item.querySelector(".delete-btn").addEventListener("click", () => {
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      render();
    });

    taskList.appendChild(item);
  });

  emptyState.classList.toggle("hidden", visibleTasks.length !== 0);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const rate = total ? Math.round((completed / total) * 100) : 0;

  document.getElementById("totalTasks").textContent = total;
  document.getElementById("pendingTasks").textContent = pending;
  document.getElementById("completedTasks").textContent = completed;
  document.getElementById("completionRate").textContent = `${rate}%`;
  document.getElementById("progressBar").style.width = `${rate}%`;
}

function openModal() {
  modal.classList.remove("hidden");
  taskTitle.focus();
}

function closeModal() {
  modal.classList.add("hidden");
  taskForm.reset();
}

document.getElementById("openModalBtn").addEventListener("click", openModal);
document.getElementById("closeModalBtn").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);

taskForm.addEventListener("submit", event => {
  event.preventDefault();

  const title = taskTitle.value.trim();
  if (!title) return;

  tasks.unshift({
    id: Date.now(),
    title,
    category: taskCategory.value,
    completed: false
  });

  saveTasks();
  closeModal();
  render();
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    render();
  });
});

searchInput.addEventListener("input", render);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

render();
