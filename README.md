Make sure Node.js is installed in your system by running the below command in Terminal/CMD
  
####  node --version

If not installed, please install it by downloading the latest stable Node version from 'https://nodejs.org/en/download/'


Use any IDE/Text editor for project coding (such as Visual Studio code / Atom)


### Setup your initial project structure by running below command - 

####    npm init

This will ask you few question, answer the same or just hit 'Enter' to use the default values. This will create a bare project skeleton with package.json file.


Either you can add dependency in the file itself or install dependency in your terminal and node will update the package.json accordingly.

 e.g - lets try adding express package to our project.

#### npm install express or npm install express@specific_version

#### ^ = it will download the latest version automaticlly.


## Let's run the existing Node API from github.com
### Clone the project
git clone https://github.com/Elevate2020/NODEAPI.git

### Navigate to the cloned project directory in your local system
### Run the below command to build/compile the Node.js application
npm install
### Run the start script to bootstrap our application
npm start
### You should see below log in your console
#### Running on Nodemon port... 4000
### Open your fav browser/postman and type the url in the address bar - http://localhost:4000/health
# Recomended Tools:

### 1.eslint (npm i eslint -D)

 In package.json add "lint":"eslint", in the script section.
 Run 'npm run lint -- --init' to initiate the liniting.
 Then run 'npm run lint filename OR .'

### 2.Nodemon (npm i nodemon)

 Watch your node project and restarts once once it sees any source file change.

 ### 3. Chai/Mocha/Sinon for unit testing





 





