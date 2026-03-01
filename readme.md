## BACKEND INSTALLATION GUIDE  :
https://dotnet.microsoft.com/download --> dot net installation.
https://dev.mysql.com/downloads/mysql/ --> MySQL installation.
https://dev.mysql.com/downloads/workbench/ --> MySQL workbench 

## install entity framework CLI tools :
dotnet tool install --global dotnet-ef

## create project and the workflow :

$ dotnet new webapi -n TaskManagementAPI
$ cd TaskManagementAPI
cmd dotnet run -- for running a dotnet application.

https://localhost:5247/swagger --> swagger UI for API calls

## package requirements :
dotnet add package Pomelo.EntityFrameworkCore.MySql
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.Design

do it on the terminal tab having the active directory as TaskManagementAPI

## migrations :
$ dotnet ef migrations add InitialCreate
$ dotnet ef database update

## FRONTEND INSTALLATION GUIDE :
Install node.js -- https://nodejs.org/

$ node -v --> node version 
$ npm v --> npm version 

npm start --> run a react app.

## creating a frontend reasct app :

$ npx create-react-app task-frontend
$ cd task-frontend

## installing the frontend packages :

$ npm install react-router-dom
$ npm install yup
npm install react-toastify

## alt creation :

$ npm create vite@latest task-frontend
 framework --> choose react 
 variant --> choose Javascript

cd tast-frontend
npm install --> installing the node requirements 
npm run dev --> running a react app 





