# Project Name

A brief description of your project. Explain what it does and why it’s useful.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Frontend](#frontend)
- [Running the Project](#running-the-project)
- [Docker](#docker)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repository
    ```

3. Create and activate a virtual environment:
    ```bash
    python -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

4. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

5. Apply database migrations:
    ```bash
    python manage.py migrate
    ```

6. Create a `.env` file based on `.env.example` and configure your environment variables.

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the necessary packages:
    ```bash
    npm install
    ```

## Usage

### Backend

1. Run the development server:
    ```bash
    python manage.py runserver
    ```

2. Access the backend API at `http://127.0.0.1:8000/`.

### Frontend

1. Start the React development server:
    ```bash
    npm start
    ```

2. Access the frontend at `http://localhost:3000/`.

## Endpoints

List of available API endpoints:

- **Subject Details:** `/api/subject-details/`
- **School Details:** `/api/school-details/`
- **Assessment Areas Details:** `/api/assessment-details/`
- **Awards Details:** `/api/awards-details/`
- **Class Details:** `/api/class-details/`
- **Populate Summary:** `/api/populate-summary/`

## Frontend

The frontend is built with React and displays all data from the API endpoints on a single page. The main file for the frontend is `src/AllDataPage.js`.

## Running the Project

1. Ensure both backend and frontend servers are running.
2. Access the application via the frontend URL (`http://localhost:3000/`).

## Docker

To Dockerize the application, follow these steps:

1. **Build the Docker images:**
    ```bash
    docker-compose build
    ```

2. **Run the Docker containers:**
    ```bash
    docker-compose up
    ```

3. **Access the application:**
    - Backend: `http://localhost:8000/`
    - Frontend: `http://localhost:3000/`

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/YourFeature
    ```

3. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```

4. Push to the branch:
    ```bash
    git push origin feature/YourFeature
    ```

5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
