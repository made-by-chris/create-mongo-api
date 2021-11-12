# create-mongo-api

TL;DR `npx create-mongo-api auth-init REPLACE_THIS_WITH_YOUR_PROJECT_NAME message product`

for an API with messages, users and products.
(run this command in your general projects folder, the command will generate its own project folder, you don't need to make one.)

---

create-mongo-api is a command-line tool that helps you create APIs quickly, with helpful starter code in each route, controller and model.

This should complement nicely for example a frontend application made with [create-react-app](https://www.npmjs.com/package/create-react-app), but can be used with any frontend really.

create-mongo-api is designed to be beginner friendly, without overly abstract code or project structure. It also sets up your connection to your mongoDB atlas cluster. Get that ready by creating a free project [here](https://www.mongodb.com/cloud/atlas/register), clicking "connect" then "connect your application". Copy the connecting string, replacing `<password>` (including the <>) with your actual password.

---

## **Usage Examples**

initialise an api with login & auth routes

`npx create-mongo-api auth-init REPLACE_THIS_WITH_YOUR_PROJECT_NAME`

OR initialise an api _without_ auth routes

`npx create-mongo-api init REPLACE_THIS_WITH_YOUR_PROJECT_NAME`

OR initialise an api with a bunch of predefined collections for Product, Review and Category:

`npx create-mongo-api init REPLACE_THIS_WITH_YOUR_PROJECT_NAME product review category`

go into the new project folder:

`cd REPLACE_THIS_WITH_YOUR_PROJECT_NAME`

generate Group, Event, Message models, routes and controllers just like this!

`npx create-mongo-api add group event message`
