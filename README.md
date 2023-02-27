# CRUD OPERATIONS - API Building

This is a basic project with CRUD (Create, Read, Update, Delete) operations

#### Cloning the Project

Go to the project repo on github and clone it to your local machine. Run the following scripts

- `npm i` to install the project dependencies.
- `touch .env` to create a dotenv file. Use the project .env.example to make sure all the environment variables are captured and used.

#### Running the server

Run `npm run dev` to start the server locally;
here are the endpoints available. Note that this is if you are using your port as 4000

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

### Database

A database is a collection of data that is organized and stored in a way that allows for efficient retrieval and manipulation of the data. Databases are used to store a wide range of information, from personal contact details to large-scale enterprise data.

#### Kinds of Databases
There are many different kinds of databases used in programming, each designed for specific purposes and use cases. In ATLP we shall focus on the following:

1. Relational Databases: These are the most widely used type of databases, and store data in tables with rows and columns. They are based on a relational model, and are designed to be used with Structured Query Language (SQL) to retrieve and manipulate data. Example of this would be like mysql and postgres

2. NoSQL Databases: These databases do not use a traditional table structure, and are designed to handle unstructured data. They are often used for large-scale distributed systems, and can be more flexible and scalable than relational databases. Example of this would be like MongoDB

#### MongoDB
MongoDB is a popular NoSQL database that uses a document-oriented data model. It is an open-source database that provides high scalability, availability, and performance. It stores data in a format called BSON, which stands for Binary JSON, and supports complex data structures like arrays and nested objects.

#### ORM and ODM

ORM (Object-Relational Mapping) and ODM (Object-Document Mapping) are tools used in software development to bridge the gap between object-oriented programming languages and relational or non-relational databases, respectively.

The main reason for using ORM and ODM is to simplify the process of storing and retrieving data from a database in object-oriented programming. ORM and ODM allow developers to interact with the database using objects and classes instead of writing low-level SQL queries or database-specific code.

Some of the benefits of using ORM and ODM include:

Abstraction: ORM and ODM abstract the complexity of the database away from the developer, allowing them to focus on writing application logic without worrying about the details of the database implementation.

Maintainability: By using ORM and ODM, developers can write code that is easier to maintain and modify over time, as the mapping between the application's objects and the database is centralized and can be modified independently of the application logic.

Portability: ORM and ODM provide a layer of abstraction that makes it easier to switch between different databases or to use different types of databases, without changing the application code.

Security: ORM and ODM can help prevent common security vulnerabilities, such as SQL injection, by automatically escaping user input and validating data.

In summary, ORM and ODM are used to simplify the process of storing and retrieving data from a database in object-oriented programming, providing benefits such as abstraction, maintainability, portability, and security.

#### Mongoose
Mongoose is a Node.js library that provides a simple and elegant way to interact with MongoDB databases. It provides an object data modeling (ODM) layer that abstracts the underlying database interactions and allows you to define schemas for your data. Mongoose also provides validation, middleware, and other features that make working with MongoDB databases easier.

##### To connect MongoDB and Mongoose to a Node/Express app, follow these steps:

1. Configure MongoDB and Mongoose: First, you need to configure MongoDB and install Mongoose. You can configure MongoDB from the official website, set project, database and collections, and you can install Mongoose using npm by running the command `npm install mongoose`.
2. Define a schema: Once you have a database, you need to define a schema for your data. A schema is a blueprint for your data that defines the structure, data types, and validation rules. You can define a schema in Mongoose using the Schema class.
3. Create a model: After you have defined a schema, you can create a model that interacts with the database. A model is an instance of the mongoose.model class that maps to a collection in MongoDB.
4. Connect to the database: To connect to the database, you need to use the mongoose.connect method. You can pass the database URL and options as arguments to this method.
5. Use the model in your app: Once you have connected to the database, you can use the model in your app to perform CRUD (create, read, update, delete) operations on the data.

#### Different methods to use with mongodb/mongoose

1. Model.create()
2. Model.findByIdAndUpdate(id, datatobeupdated, {new: true})
3. Model.findOne({_id})
4. Model.findByIdAndDelete(id)
5. Model.find()

**Note**: The rest you can now refer to the codebase.

#### Authentication and Authorization

Authentication and authorization are two important concepts in web applications that are often implemented in conjunction with each other.

Authentication is the process of verifying the identity of a user, typically through a username and password combination. It confirms that the user is who they claim to be and grants access to protected resources. In an Express app, authentication can be implemented using various libraries such as Passport, jsonwebtoken, and bcrypt.

Authorization, on the other hand, is the process of determining what resources a user is allowed to access based on their authenticated identity. It involves checking the user's permissions or roles and deciding whether or not they have the necessary privileges to perform a certain action. In an Express app, authorization can be implemented using middleware functions that check the user's permissions before allowing access to certain routes or resources.

### bcrypt
Bcrypt is a popular library for hashing passwords in web applications. It provides a secure way to store passwords by hashing them with a salt, making it difficult for attackers to obtain the original password even if the hashed value is compromised. Bcrypt is commonly used in Express apps to hash and verify passwords.

Here are some key terms and methods that are mostly used with bcrypt:

- Hashing: Bcrypt uses a hash function to convert a plaintext password into a hash value that can be stored in a database. Hashing is a one-way process, meaning that the original plaintext password cannot be obtained from the hash value.

- Salt: A salt is a random string of characters that is added to the plaintext password before it is hashed. The salt helps to make the hash value more unique and difficult to crack, even if the same password is used for multiple users.

- Salt rounds: Bcrypt allows you to configure the number of times the password is hashed with the salt, known as the salt rounds. A higher number of salt rounds makes the hashing process more secure, but also slower.

- bcrypt.hash(): This method takes a plaintext password and a salt rounds value as arguments and returns a hashed value that can be stored in a database.

- bcrypt.compare(): This method takes a plaintext password and a hashed password as arguments and returns a boolean value indicating whether or not the passwords match. It first hashes the plaintext password with the same salt and number of rounds as the hashed password, and then compares the resulting hash values.

#### JWT
JWT (JSON Web Token) is a popular method of implementing authentication in web applications. A JWT is a compact, URL-safe means of representing claims to be transferred between two parties. In the context of authentication, a JWT is usually issued by an authentication server upon successful authentication of a user, and then sent to the client as a response to the authentication request. The client then stores the JWT and sends it with subsequent requests to the server to prove its identity.

Here are some key terms and methods that are used with JWT in Express apps:

- JWT (JSON Web Token): JWT is a standard for creating secure tokens that can be used for authentication and authorization. A JWT consists of three parts: a header, a payload, and a signature.

- jwt.sign(): This method is used to create a JWT token. It takes a payload and a secret key as arguments, and optionally an options object that can be used to set the expiration time or other options.

- jwt.verify(): This method is used to verify a JWT token. It takes a token and a secret key as arguments, and returns the decoded payload if the token is valid.





