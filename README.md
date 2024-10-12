# Project Description
This is a starter project setup using `Express.js`, `PostgreSQL`, `TailwindCSS`, and `EJS`.

## How to Run

### Step 1
Install all required Node modules by running 
```bash
npm install
```

### Step 2
Start your `PostgreSQL` server using `pgAdmin` or any similar tool on your local computer (if you are using a remote database server, this step is not required).

### Step 3
Update the `PostgreSQL` credentials in the `index.js` file according to your database configuration.

### Step 4
In one terminal, run `npm run watch:css` to start TailwindCSS, which will watch for any file changes. In another terminal, run `npm run start-dev` to start the server.

### Step 5
Open [http://localhost:3000/](http://localhost:3000/) in your browser to see the output. You can edit `index.js` or `index.ejs` as needed, save your changes, and refresh the page to see the updates. If the changes reflect as expected, congratulations! You have successfully run the project.

## Additional Tips
If you want to update all dependencies to their latest versions, follow these steps:

### Step 1
First, install the `npm-check-updates` package globally by running the following command: `npm install -g npm-check-updates`, if you haven't installed it before.

### Step 2
Check which dependencies and devDependencies need updates by running: `ncu --dep dev,prod`.

### Step 3
Update the `package.json` file with the latest versions of all packages by running: `ncu -u --dep dev,prod`.

### Step 4
Finally, run the `npm install` command to update all of your dependencies to their latest versions.


