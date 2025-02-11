# To-do List Application

A modern task management application built with React frontend and Django REST Framework backend. This application allows users to create, complete, and delete tasks with a clean and responsive interface.

## Features

- Create new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Real-time updates
- Responsive design

## Tech Stack

- Frontend: React.js
- Backend: Django REST Framework
- Database: SQLite

## Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)
- npm (Node package manager)

## Installation

### Backend Setup

1. Create and activate virtual environment:
```bash
python -m venv venv
.\venv\Scripts\activate
```

2. Install Python dependencies:
```bash
pip install django djangorestframework django-cors-headers
```

3. Run migrations:
```bash
python manage.py migrate
```

4. Start Django server:
```bash
python manage.py runserver
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start React development server:
```bash
npm start
```

## Usage

1. Access the application at \`http://localhost:3000\`
2. Add new tasks using the input field
3. Click the checkbox to mark tasks as complete
4. Click the delete button to remove tasks

## API Endpoints

- GET \`/api/tarefas/\` - List all tasks
- POST \`/api/tarefas/\` - Create new task
- PUT \`/api/tarefas/{id}/\` - Update task
- DELETE \`/api/tarefas/{id}/\` - Delete task

## Project Structure

```
to-do-py/
├── .gitignore
├── manage.py
├── backend/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── tarefas/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── frontend/
│   └── frontend/
│       ├── package.json
│       ├── public/
│       │   ├── index.html
│       │   └── ...
│       └── src/
│           ├── App.js
│           ├── index.js
│           ├── reportWebVitals.js
│           └── ...
└── venv/
    └── ...
```

The application will be running on:
- Frontend: "http://localhost:3000"
- Backend: "http://localhost:8000" 
