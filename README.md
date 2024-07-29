# Django and React Chat Application

This is a basic chat application built using Django for the backend and React for the frontend. The app allows users to send and receive messages in real-time.

## Features

- User authentication and authorization
- Real-time messaging
- Responsive UI
- RESTful API with Django REST Framework
- WebSocket support with Django Channels

## Screenshots

![Login Page](screenshots/login.png)
![Chat Page](screenshots/chat.png)

## Prerequisites

- Python 3.7+
- Node.js 14+
- npm 6+

## Installation

### Backend (Django)

1. Clone the repository:
   ```bash
   git clone https://github.com/devmousa/django-react-chat-app
   cd Chatapp-using-Django-RestFramework-and-React-master/backend

2. Create and activate a virtual environment:
   ```bash
   python -m venv env
   source venv/bin/activate

3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt

4. Run the initial migrations:
   ```bash
   python manage.py migrate


5. Create a superuser:
   ```bash
   python manage.py createsuperuser

6. Start the development server:
   ```bash
   python manage.py runserver


### Frontend (React)

1. Navigate to the frontend directory:
   ```bash
   cd Chatapp-using-Django-RestFramework-and-React-master/frontend


2. Install the required npm packages:
   ```bash
   npm install


3. Start the React development server:
   ```bash
   npm start


Open your browser and go to http://localhost:8000 for the Django backend.
Open another tab and go to http://localhost:3000 for the React frontend.
Register a new account or log in with an existing account.
Start chatting!