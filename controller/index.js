const { readFile, writeFile } = require('fs');

const tasksList = [];

const createTask = async(description, pathName) => {
    const task = {
        description,
        completed: false
    }

    const tasksList = await listTasks(pathName);
    tasksList.push(task);

    writeFile(pathName, JSON.stringify(tasksList), err => err? err: `File saved correctly`);

}

const listTasks = pathName => new Promise ((resolve, reject) => {
    readFile(pathName, 'utf-8', (err, data) => {
        if(err) reject(err);
        else resolve(JSON.parse(data).tasks);
    })  
})


module.exports = {
    createTask,
    listTasks
}