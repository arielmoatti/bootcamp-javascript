//we require these two Node modules
const cluster = require("cluster");
const os = require("os");
//set the length of the cpu array
const numCpus = os.cpus().length;

//master process - main *file* we want Node to run --- index.js
cluster.setupMaster({
    exec: __dirname + "/index.js",
});

//worker child process - we want to utilize as many workers as the number of cores we have
for (let i = 0; i < numCpus; i++) {
    //spawn my worker
    cluster.fork(); //creates a child process
    //each one of these worker is going to run the master process on each core
}

//replacing a died worker
//when a worker dies it emits event called "exit"
//we create an event listener, if it happens a callback function runs
cluster.on("exit", (worker) => {
    //the second argument is not a must (worker)
    console.log("this worker has died", worker.process.pid); //gives the worker's ID
    cluster.fork(); //replaces the dead worker with a new one, by calling the method again
});
