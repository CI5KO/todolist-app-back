# ToDo App Backend

This is the backend application for a ToDo App. It provides API endpoints for creating, updating and deleting tasks and users.

## Technologies

- Node.js
- Express.js
- Typescript
- MongoDB
- Sequelize

## Project Structure

The project is structured as follows:

- `src`: Contains the source code for the application.
  - `user`: Contains the user model and routes for authentication.
    - `application`: Contains the application use cases.
    - `domain`: Contains the core application.
    - `infrastructure`: Contains the infrastructure code for connecting to MongoDB or Postgresql.
  - `task`: Contains the task model and routes for CRUD operations on tasks.
    - `application`: Contains the application use cases.
    - `domain`: Contains the core application.
    - `infrastructure`: Contains the infrastructure code for connecting to MongoDB or Postgresql.
  - `app.ts`: Initializes the Express application and sets up middleware.
- `dist`: Contains the compiled code from the `src` directory. This is where you run your application from.
- `package.json`: Contains project dependencies and scripts for running the application.
- `tsconfig.json`: Configures the Typescript compiler.
- `.env`: File for setting environment variables.

## Setup and Installation

1. Clone this repository.
2. Install dependencies by running `npm install`.
3. Create a `.env` file and set your environment variables.
4. Run `npm run dev` to start the application in development mode.
5. Run `npm run build` to compile the Typescript code into the `dist` directory.
6. Run `npm start` to start the application in production mode.

## Docker Setup

To run the application using Docker, follow these steps:

1. Build the Docker image by running `docker build -t todolist-app-back .`.
2. Run the container with `docker run -p 3000:3000 todolist-app-back`.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Commit and push your changes to the new branch.
4. Submit a pull request.

## License

This project is licensed under the MIT License.
You can copy and modify the code as you wish.
