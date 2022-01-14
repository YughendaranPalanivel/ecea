# ECEA Website
Stack Using - MERN Stack

---

### Installing and setting up mongoDB and compass
1. Follow the instructions in this [link](https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database) to install mongoDB and compass in Windows, MacOS and Linux locally.
2. Change the version from ```4.4``` to ```5.0``` while executing the commands in the above link.
3. After setting up the local mongoDB run ```use ECEA``` to create ECEA database in mongoDB local instance.
4. Open Compass and connect with the empty connection string, so that it connects with the local mongoDB and open DAMO database to view the collections and documents in respective collections.

---

### Installing and setting up Node.js
1. Install the respective node.js packages for your operating system from this [link](https://nodejs.dev/download/).

---

### Running application
1. Clone this repository using command ```git clone https://github.com/ECEA-CEG/ecea_website.git```.
2. After cloning run ```npm i``` to install the dependencies.
3. After completing the installation process run ```npm run dev``` in the command line to start our application.

---

### Pulling and pushing to a branch
1. To push code into a branch in the remote repository, first you have to pull that branch from the remote repository using the command ```git pull origin <BRANCH_NAME>```. 
2. Make sure that the remote repository branch name and the local repository branch name are same.
3. Before pushing run ```git add .``` to stage all changes and do a local commit ```git commit -m <COMMIT_MESSAGE>```.
3. Then push with the command ```git push origin <BRANCH_NAME>```.