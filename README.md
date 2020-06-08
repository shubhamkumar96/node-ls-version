# node-ls-version
###  A node version of "ls" command

## Built With
  *   JavaScript, Node.js
  
###  In-built Libraries Used:-
* [fs](https://nodejs.org/api/fs.html)  =  API for interacting with the file system.
* [path](https://nodejs.org/api/path.html)  =  Provides utilities for working with file and directory paths

###  3rd-Party Libraries Used:-
* [chalk](https://www.npmjs.com/package/chalk)  =  For styling terminal strings.

#### Follow below steps for using "nls" command in your local machine:-
 
##### 1) Execute below command in terminal to download the dependencies:-
        npm install
##### 2) Execute below command in terminal [Required only on MAC, for granting permission to run the file as executable].
        chmod +x index.js
##### 3) Execute in terminal(as an admin) after going inside the project directory [This is used to link our project to make it available         globally everywhere else.] :
        npm link
    
#### Now you can run "nls" command in your terminal from any directory to get the list of contents inside of that directory.

### Below are some screenshots of executing this command in Terminal:
#### "Executing 'nls' command without passing any argument, displays the list of contents in current directory"
![Demo Images](/screenshots/demo1.PNG?raw=true)

#### "Executing 'nls' command and passing relative path as argument, displays the list of contents at that path"
![Demo Images](/screenshots/demo2.PNG?raw=true)
