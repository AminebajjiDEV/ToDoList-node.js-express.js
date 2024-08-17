# TodoList App with Node.js, Express.js, and PostgreSQL Backend, and EJS for Server-Side Rendering

This was my first capstone-project as an introduction to Node.js, Express.js and EJS module for The Complete Web Development Bootcamp Online on Udemy.

I made an update to this project by integrating PostgreSQL with the pg client in a Node.js/Express backend. this update was a good step for me to enhance my understanding of CRUD (Create, Read, Update, Delete) operations and to practice more by executing what i learned during the PostgreSQL module.

The app now allows users to manage their daily tasks by adding, editing, and deleting them. Tasks can be marked as complete, which removes them from the database. Through this project, I aimed to gain hands-on experience with writing database queries, building a robust back-end, and rendering dynamic content on the front-end using EJS.


## Features

<h4>- CRUD Operations:</h4> The application showcases my ability to implement CRUD operations, including creating new tasks, reading and displaying tasks, updating existing tasks, and deleting completed tasks from the database.
<h4>- PostgreSQL Integration:</h4>
  I used PostgreSQL for data storage and management, leveraging the pg client to handle database queries on the back-end.
<h4>- Task Creation:</h4> Users can add new tasks to their to-do list.
<h4>- Task Editing:</h4> Users have the ability to update existing tasks to reflect any changes or corrections.
<h4>- Task Completion:</h4> Tasks can be marked as complete, automatically removing them from the database.
<h4>- Persistent Data:</h4> All tasks are stored in a PostgreSQL database, ensuring that data is preserved between sessions.
<h4>- Responsive Design:</h4> The front-end, developed with EJS, offers a responsive and user-friendly interface.
<h4>- Dynamic Rendering:</h4> Task lists are dynamically rendered on the front-end using EJS, allowing for real-time updates.

## Technologies Used

<h4>- Node.js:</h4> Used as the runtime environment to build the server-side logic.
<h4>- Express:</h4> A lightweight framework for handling routing and middleware.
<h4>- PostgreSQL:</h4> A relational database used for storing tasks and user data, with queries handled via the pg client.
<h4>- EJS:</h4> A templating engine for rendering HTML on the server-side.
<h4>- HTML/CSS:</h4> For the basic structure and styling of the front-end.
<h4>- JavaScript:</h4> For client-side interactivity and dynamic content.

## Installation

<h3>1. Clone the repository:</h3>

   ```
   git clone https://github.com/AminebajjiDEV/ToDoList-node.js-express.js.git
```
<h3>2. Navigate to the project directory:</h3>

   ```
    cd ToDoList-node.js-express.js
```

<h3>3. Install dependencies:</h3>

   ```
     npm install  
```
<h3>4. Set Up PostgreSQL Database</h3>

   - Create a PostgreSQL database to store your tasks.
   
   - Update the .env file in the project root with your database credentials. 
   Use the provided .env.example as a template:
   
```
 DB_HOST=your_database_host
 DB_PORT=your_database_port
 DB_USER=your_database_username
 DB_PASSWORD=your_database_password
 DB_NAME=your_database_name
```

<h3>5. Start the Application</h3>
  
  ```
   npm index.js
   ```
   
 - then Open your web browser and navigate to http://localhost:3000.
   
<h1>Usage</h1>

- Add a Task: On the main page, enter your task details in the provided form and click "Submit". The task will be saved in the PostgreSQL database.
- Edit a Task: To edit an existing task, click the "Pencil-edit" button next to the task. Make your changes in the form that appears and save the updates.
- Mark a Task as Complete: Click the "Check-box" button next to the task. This will remove the task from your list and delete it from the database.
- View Tasks: All tasks will be displayed on the homepage. Each task can be edited or marked as complete.

<h1>Folder Structure</h1>
 Here’s an overview of the folder structure for the project:
 
   ```
 ToDoListApp/
│
├── views/               # EJS templates for rendering HTML
│   ├── partials/        # Partial EJS templates (header, footer)
│   ├── index.ejs        # Main page template
│   ├── explanations.ejs         # Code Overview explaining how the back/front-end foncutions 
│
├── public/              # Static files (CSS, JS, images)
|   ├── pictures/  
│   ├── css/
│   ├── js/
│
├── routes/              # Express route handlers
│   ├── index.js         # Main route for handling task operations
│
│
├── .env                 # Environment variables (not included in Git)
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
└── ...                  # Other configuration and miscellaneous files

   ```


<h1>Screenshot of Home Page with Features Explanations</h1>

![App Screenshot](https://github.com/AminebajjiDEV/ToDoList-node.js-express.js/blob/main/public/pictures/app%20sc.png)


<h1>API Endpoints</h1>


<h3>Here are the API endpoints I implemented for my ToDo List application:</h3>


   - GET /
    
    This endpoint retrieves all the tasks from the database and displays them on the homepage.

    Response:
        Status: 200 OK
        This renders the index.ejs page, showing all tasks listed under "Today."


   - POST /add
    
    This endpoint lets me add a new task to the database.

    Request Body:
        newItem: The title of the task I want to add.

    Response:
        Status: 302 Found (redirect)
        After adding the task, it redirects back to the homepage (/), where the new task appears.


   - POST /delete
    
    This endpoint is used to delete a task from the database.

    Request Body:
        deleteItemId: The ID of the task I want to delete.

    Response:
        Status: 302 Found (redirect)
        After deleting the task, it redirects to the homepage (/), with the task removed from the list.


   - POST /edit
    
    This endpoint allows me to update the title of an existing task in the database.

    Request Body:
        updatedItemTitle: The new title I want to give the task.
        updatedItemId: The ID of the task I want to update.

    Response:
        Status: 302 Found (redirect)
        Once the task is updated, it redirects to the homepage (/), displaying the updated task.


   - GET /code-rev
    
    This endpoint renders the explanations.ejs page, where I’ve included code explanations.

    Response:
        Status: 200 OK
        This renders the explanations.ejs page.

<h1>Contributing</h1>

- I’m open to contributions! If you have any ideas for improvements, bug fixes, or want to add new features, feel free to fork the repository and submit a pull request. Here’s how you can get involved:

<h3>1. Fork the repository.</h3>

- Click the "Fork" button on the top right of the repository page.

<h3>2. Clone the Forked Repository:</h3>

- Clone your forked repository to your local machine.
  
````
https://github.com/AminebajjiDEV/ToDoList-node.js-express.js.git
  ````

<h3>3. Create a New Branch: </h3>

- Create a branch specifically for your feature or bug fix.
  
````
git checkout -b feature-or-bugfix-name
````


<h3>4. Make Your Changes: </h3>

- Implement your changes or the new feature.


<h3>5. Commit Your Changes & Push to the Branch:</h3>

````
git commit -m "Description of the feature or bug fix"
git push origin feature-or-bugfix-name

````

<h3>6. Submit a Pull Request:</h3>

- Go back to the original repository and submit a pull request.
- <h1>Acknowledgements</h1>
<h3>I’d like to express my gratitude to the following:</h3>
  <li>Udemy and My Web Development Bootcamp:</li>
  <p>A special thank you to the instructor of my web development bootcamp on Udemy. The course was incredibly effective in teaching me how to implement PostgreSQL into a Node.js application, as well as understanding CRUD operations. The clear explanations and practical examples made a significant difference in my learning process.</p>
  <li>Stack Overflow Community:</li>
  <p>I relied heavily on Stack Overflow for troubleshooting and finding solutions to various challenges throughout the development process. The community’s collective knowledge and willingness to help have been invaluable.</p>
  <li>Open Source Community:</li>
  <p>The open-source community provided the essential tools and libraries that enabled me to make my application's data persistent. Thanks to open-source technologies, I was able to use PostgreSQL, an open-source database system, to power my app.</p>


<h1>License</h1>
   <h3>This project is licensed under the MIT License. Feel free to check out the LICENSE file for more details.</h3>
   
