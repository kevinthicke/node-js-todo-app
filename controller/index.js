const { readFile, accessSync, R_OK } = require('fs');

const tasksList = [];

const createTask = description => {
    const task = {
        description,
        completed: false
    }

    tasksList.push(task);
    console.log(tasksList)
}

const listTasks = (pathName) => new Promise ((resolve, reject) => {
    readFile(pathName, 'utf-8', (err, data) => {
            if(err) throw new Error(`I cant read ${pathName}`);
            
            const aTasks = JSON.parse(data).tasks;
            console.log(aTasks);
    });
})


module.exports = {
    createTask,
    listTasks
}