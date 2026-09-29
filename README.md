# TaskFlow — Git & Deployment Practice Project

TaskFlow is a responsive task-management web application built using:

- HTML5
- CSS3
- Vanilla JavaScript
- Browser LocalStorage

No backend or database is required.

## Features

- Add tasks
- Mark tasks as completed
- Delete tasks
- Search tasks
- Filter by All / Pending / Completed
- Completion percentage
- Responsive design
- Data persists in browser LocalStorage

## Project Structure

```text
taskflow-git-practice/
│
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   └── style.css
│
└── js/
    └── app.js
```

## Run Locally

Simply open `index.html` in your browser.

For a better local development experience, use VS Code with the Live Server extension.

## Git Practice

Open the terminal inside this project folder.

### 1. Initialize Git

```bash
git init
```

### 2. Check files

```bash
git status
```

### 3. Add files

```bash
git add .
```

### 4. Create your first commit

```bash
git commit -m "Initial commit - TaskFlow app"
```

### 5. Create a GitHub repository

Create a new repository on GitHub named:

```text
taskflow-git-practice
```

Do not initialize it with another README if you want to practice pushing this local project from scratch.

### 6. Connect your local repository

Replace YOUR-USERNAME with your GitHub username:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/taskflow-git-practice.git
git push -u origin main
```

## Git Practice Challenges

After the first push, practice making changes.

### Challenge 1 — Change the application title

Edit `index.html`, then:

```bash
git status
git add .
git commit -m "Update application title"
git push
```

### Challenge 2 — Add a new feature

Try adding a task priority such as:

- Low
- Medium
- High

Commit it separately:

```bash
git add .
git commit -m "Add task priority"
git push
```

### Challenge 3 — Create a branch

```bash
git checkout -b feature/dark-mode
```

Build a dark mode and commit it:

```bash
git add .
git commit -m "Add dark mode"
git push -u origin feature/dark-mode
```

Then create a Pull Request on GitHub.

## Deployment Practice

You can deploy this static application using a static hosting service such as GitHub Pages, Netlify, or Vercel.

For GitHub Pages, the important point is that `index.html` is in the project root.

## Important Git Commands

```bash
git status
git add .
git commit -m "your message"
git log --oneline
git branch
git checkout -b feature/name
git switch main
git pull
git push
git remote -v
```

## Suggested Recruiter Portfolio Description

> Built a responsive task management web application using HTML, CSS and JavaScript, implementing CRUD-style task interactions, filtering, search, LocalStorage persistence and responsive UI. Managed the project using Git and GitHub and deployed it as a static web application.
