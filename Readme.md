# NewsFeed System Backend

This is the backend for Xgrid assessment.

![alt text](https://github.com/[sufiyanirfan3]/[XTH_NewsFeed]/blob/[master]/Diagram.PNG?raw=true)

## Functional Requirments
User:
- User can create profile
- User can join group
- User can send friend request
- User can view the newsfeed of all the posts

Post:
- User can create post
- User can view his post
- User can update his post
- User can delete his post

## Non-Functional Requirements

#Scalable:
The database is designed keeping in mind Normalization concepts 1NF, 2NF AND 3NF
Also Binary Search has been used for indexing means results would be fetched quickly

#Performance:
As many posts are posted at the same time so initally in news feed only 20 posts would be shown.
We can apply pagination here so we donot have to call all posts at same time. We can call in batches using limit and offset (pagination)

#Secure:
The news feed system is highly secure as we are using JWT (JSON Web Token) for user autentication. After user create his profile then only he can post.

## Setup

1. Install dependencies:

   ```bash
   npm install

   ```

2. Run the project
   ```bash
   npm run dev
   ```

# ENV variables

Create a .env file in the root directory and add the necessary environment variables:

PORT=3000

db=newsfeed

username=dbUserName

password=dbPassword

host=localhost

dialect=mysql

# Project Structure

app.js: Entry point for the application.

src/models: Directory containing Sequelize models.

src/routes/post/post.js Express routes for post-related endpoints.

src/controllers/post/controller.js: Controller functions for post-related endpoints.

# Available Endpoints

Get /newsFeed : Show the newsfeed to the user
Get /post : User can get all posts he has created
Get /post/:id : User can get a specific post he has created

Post /post : User can create a post
Put /post/:id : User can update his post
Delete /post/:id : User can delete his post



# Dependencies

Express: Web application framework.

Sequelize: ORM for MySQL.

Cors: Middleware for handling Cross-Origin Resource Sharing.

Dotenv: Load environment variables from a .env file.

MySQL2: MySQL library for Node.js.

Nodemon: Development utility for automatically restarting the server.


# Scripts

npm start: Start the server.

npm run dev: Start the server in development mode using Nodemon.
