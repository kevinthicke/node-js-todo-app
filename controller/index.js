const { readFileSync, accessSync, R_OK } = require('fs');

const tasksList = [];

const createTask = description => {
    const task = {
        description,
        completed: false
    }

    tasksList.push(task);
    console.log(tasksList)
}

const listTasks = async(pathName) => {
    const data = readFileSync(pathName, 'utf-8')
    return JSON.parse(data).tasks;  
    });
}


module.exports = {
    createTask,
    listTasks
}