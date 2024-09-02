# Node.js Project

This is a basic Node.js web application that demonstrates CRUD operations, user authentication, and logging, using Express.js and MongoDB.

## Features

- User management (Create, Read, Update, Delete)
- Logging using a custom middleware
- Error handling
- CORS configuration
- MongoDB connection

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (MongoDB Atlas or local instance)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository on Git Bash:**

  
   - git clone git@github.com:ChandupaJay1/MERN_Project.git
   
   - cd <root>-nodejs-project

   
3. **Install dependencies:**
    
    npm install

4. **Set up MongoDB:**

    * Sign up for MongoDB Atlas or use a local instance.
    * Create a cluster and obtain the connection string.
    * Whitelist your IP address if using MongoDB Atlas.

5. **Configure environment variables:**

    * Create a .env file in the root of your project:

      PORT=3500
      NODE_ENV=development
      DATABASE_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<yourDatabaseName>?retryWrites=true&w=majority&appName=Cluster0

      Replace <username>, <password>, and <yourDatabaseName> with your actual MongoDB credentials and database name.

   **Running the Application**

           1. Start the server:
                         npm run dev
   
           2. Access the application:

           3. Open your browser and go to http://localhost:3500.

   **Project Structure**

          ├── config
          │   ├── corsOptions.js
          │   ├── dbConn.js
          │   └── allowedOrigins.js
          ├── controllers
          │   └── usersController.js
          ├── middleware
          │   ├── errorHandler.js
          │   └── logger.js
          ├── models
          │   └── User.js
          ├── routes
          │   ├── root.js
          │   └── userRoutes.js
          ├── views
          │   └── 404.html
          ├── .env
          ├── server.js
          ├── package.json**
          └── README.md


**Explanation of Key Files**
      * server.js: The main entry point of the application. It sets up middleware, routes, and connects to the MongoDB database.
      * config/dbConn.js: Handles the connection to the MongoDB database.
      * middleware/logger.js: Custom middleware for logging requests.
      * middleware/errorHandler.js: Global error handler middleware.
      * routes/userRoutes.js: Contains the API routes for user-related operations.
      * controllers/usersController.js: Contains the logic for handling user operations like creating, reading, updating, and deleting users.
      * views/404.html: Custom 404 error page.
      * config/corsOptions.js: Configuration for CORS (Cross-Origin Resource Sharing).
      * config/allowedOrigins.js: Contains the list of allowed origins for CORS.


**License**

  * This project is licensed under the MIT License - see the LICENSE file for details.

**Contributing**
  * If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.


This `README.md` should cover all aspects of your project, providing a clear and comprehensive overview.
