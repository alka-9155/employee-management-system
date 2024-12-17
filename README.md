# Employee Management System

A **ReactJS** and **Tailwind CSS** based project for managing employee tasks with distinct functionalities for Admins and Employees. This system allows an admin to manage tasks for employees, while employees can view and track their own tasks. The project uses **LocalStorage** for data persistence and authentication. Future improvements include integrating a backend for enhanced functionality.

## 🛠️ Features

### 1. **Login System**
   - A single login page for both Admin and Employees.
   - Based on login credentials, users are redirected to either the **Admin Dashboard** or the **Employee Dashboard**.
   - **Credentials:**
     - **Admin:**
         - *Username:* `admin@example.com`
         - *Password:* `admin`
     - **Employees:**
         - *Username:* `employeeName@example.com` (replace `employeeName` with actual names within `[aarav, vivaan, aaditya, karan, riya`.)
         - *Password:* `employeeName` (replace `employeeName` with actual names within `[aarav, vivaan, aaditya, karan, riya`.)

### 2. **Admin Dashboard**
   - View all employees and their associated tasks.
   - Assign new tasks to employees.
   - Tasks are displayed with details like title, description, priority, and status (accepted, new, completed, failed).

### 3. **Employee Dashboard**
   - Employees can view their own tasks.
   - Task details such as title, description, date, category, and priority are displayed.
   - Employees can track task status (new, accepted, completed, or failed).

### 4. **Task Properties**
   Each task has the following properties:
   - `taskTitle`: Title of the task.
   - `taskDescription`: A brief description of the task.
   - `taskDate`: Deadline or assigned date of the task.
   - `category`: The task category (e.g., Finance, Marketing, etc.).
   - `priority`: The priority level (e.g., High, Medium, Low).
   - `status`: Task status (Accepted, New Task, Completed, Failed).

### 5. **LocalStorage**
   - Used to store and retrieve data such as user credentials, tasks, and task statuses.
   - Enables persistence across sessions without a backend.

## 🚀 Future Improvements
   - **Backend Integration**: Improve data management and security by integrating a backend (e.g., Node.js with a database like MongoDB).
   - **Authentication**: Implement more secure login and authentication using JWT or OAuth.
   - **Task Filters**: Add filters to view tasks by status or priority.
   - **Notifications**: Include notifications for new tasks or task updates.

## 🖥️ Pages

1. **Login Page**:  
   Provides access for both admin and employees based on credentials.

2. **Admin Dashboard**:  
   Allows the admin to view all tasks and assign new tasks to employees.

3. **Employee Dashboard**:  
   Displays tasks assigned to a particular employee with all relevant details.

## 📝 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/akshay-9155/employee-management-system.git

2. Navigate to the project folder:
    ```bash
    cd employee-management-system

3. Install the dependencies:
    ```bash
    npm install

4. Start the project
    ```bash
    npm run dev

## 🛠️ Technologies Used

1. ReactJS: Frontend framework for building the user interface.
2. Tailwind CSS: For responsive and modern styling.
3. LocalStorage: For storing user data and tasks.
4. JavaScript (ES6+): Core programming language.