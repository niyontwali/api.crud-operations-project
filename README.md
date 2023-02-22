# CRUD OPERATIONS - API Building

This is a basic project with CRUD (Create, Read, Update, Delete) operations

#### Cloning the Project

Go to the project repo on github and clone it to your local machine. Run the following scripts

- `npm i` to install the project dependencies.
- `touch .env` to create a dotenv file. Use the project .env.example to make sure all the environment variables are captured and used.

#### Running the server

Run `npm run dev` to start the server locally;
here are the endpoints available

- get all blogs(GET METHOD): http://127.0.0.1:4000/api/v1/blogs
- get one blog (GET METHOD): http://127.0.0.1:4000/api/v1/blogs/1
- create blog (POST METHOD): http://127.0.0.1:4000/api/v1/blogs
- update blog (PUT METHOD): http://127.0.0.1:4000/api/v1/blogs/1
- delete blog (DELETE METHOD): http://127.0.0.1:4000/api/v1/blogs/1

#### Folder Structure

We shall be using MVCS which stands for Model-View-Controller-Service, which is an extension of the traditional Model-View-Controller (MVC) architecture pattern.

In an MVCS architecture, the responsibilities of the application are divided into four main components:

Model: The model represents the data and logic of the application. It includes data storage, business logic, and validation rules.
View: The view is responsible for rendering the user interface, based on the data provided by the model. It includes HTML templates, CSS stylesheets, and JavaScript code.
Controller: The controller receives and processes user input, and invokes the appropriate actions on the model and service layers. It acts as a mediator between the view and the model, and is responsible for managing the application flow.
Service: The service layer provides a set of reusable business functions that can be used by the controllers to implement specific features. It is responsible for handling the interaction between the controllers and the model, as well as any external services that the application might use.
The main benefits of using an MVCS architecture are:

Improved separation of concerns: By dividing the application into four distinct layers, MVCS makes it easier to isolate and test different parts of the application.
Reusability: By defining a separate service layer, the application can reuse the same business logic across multiple controllers, making it easier to maintain and extend the application.
Scalability: By separating the concerns of the application, MVCS makes it easier to scale the application horizontally or vertically.
Overall, MVCS is a useful architecture pattern for building complex applications, especially those that require high scalability and reusability.

We shall follow this folder structure:

project-name/
├── node_modules/
├── src/
│ ├── config/
│ │ └── config.js
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── server.js
├── .env
├── .env.example
├── .gitignore
├── package.json
└── package-lock.js

#### Brief understand of some terms

##### 1. dotenv

This is a module that allows you to load environment variables from a file named `.env` into process.env. In an Express project, it's often used to manage configuration settings that should not be hard-coded into your source code, such as API keys, database credentials, and other sensitive information.

Here are a few benefits of using dotenv in your Express project:

Keeps sensitive information secure: By storing sensitive information like API keys in a separate .env file, you can ensure that this information is not publicly visible in your source code or in version control.
Simplifies configuration management: With dotenv, you can store all your configuration settings in a single file, making it easier to manage and modify these settings across multiple environments (e.g., development, staging, production).
Improves portability: dotenv allows you to easily move your application from one environment to another by simply copying the .env file, without having to modify your source code.

To install it you run `npm install dotenv`

##### 2. CORS (Cross-Origin Resource Sharing)

This is a security feature implemented by web browsers to restrict cross-origin HTTP requests initiated from scripts running on a web page. CORS provides a way for servers to specify which origins are allowed to access their resources, and which HTTP methods and headers are allowed.

In an Express application, the cors middleware is used to configure the Access-Control-Allow-Origin header, which tells the browser which origins are allowed to access the resources on your server. Without this header, the browser will block any requests initiated from a different origin than your server.

Here are a few use cases for using the cors middleware in an Express application:

Cross-domain API requests: If you have an API that is hosted on a different domain than your client application, the cors middleware allows you to make cross-domain API requests without running into CORS errors.
Third-party integrations: If you integrate with third-party services that make requests to your server, you can use the cors middleware to specify which origins are allowed to access your server.
Development environment: When developing an application locally, you might want to test your front-end and back-end code separately, which requires running them on different ports or domains. The cors middleware can help you enable cross-origin requests during development.
To use the cors middleware in an Express application, you first need to install it by running the following command in your terminal: `npm install cors`

##### 3. body-parser

This is a middleware for processing incoming request bodies in an Express application. It is used to extract the body of an HTTP request and parse it into a more usable format, such as a JavaScript object or an array.

Before version 4.16 of Express, body-parser was included as part of the Express core. Starting from version 4.16, body-parser is a separate module that needs to be installed and used explicitly.

Here are some use cases for body-parser in an Express application:

Parsing form data: When a form is submitted from a client to a server, the data is sent as an HTTP request body. body-parser can be used to extract the form data from the request body and parse it into a JavaScript object or an array.
Parsing JSON data: When a client sends JSON data to a server, body-parser can be used to extract the JSON data from the request body and parse it into a JavaScript object.
Parsing URL-encoded data: When a client sends URL-encoded data to a server, body-parser can be used to extract the data from the request body and parse it into a JavaScript object.
To use body-parser in an Express application, you first need to install it by running the following command in your terminal: `npm install body-parser`

##### 4. nodemon

This is a tool that is used to automatically restart a Node.js application whenever changes are made to the application's source code. This can be very helpful during the development process, as it saves you the hassle of manually restarting the application every time you make a change.

nodemon monitors your Node.js application for changes in the file system and automatically restarts the application when changes are detected. This means that you can make changes to your application's code and see the effects of those changes immediately without having to stop and restart the application.

To use nodemon in your Node.js application, you first need to install it globally by running the following command in your terminal: `npm install -g nodemon` to install it globally or `npm install nodemon --save-dev`

**Notes:**

1. If you are using ES6, please a file must have the .js file extension and the "type": "module" field set in in package.json file.
2. As we have a utils folder in our project we can use that one to incoporate in re-usable functions e.g

```javascript
export default const errorFunc = (res, messageContent, status) => {
  return res.status(status).json({
    message: messageContent
  });
};
```
