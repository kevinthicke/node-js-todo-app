let { argv } = require('./config/yargs');
const { createTask, listTasks } = require('./controller');


const pathName = './db/tasks.json';
const [ command ] = argv._;

const menu = command => {
    switch(command) {
        case 'create': 
            createTask(argv.description, pathName)
            break;
        case 'update':
            console.log(`update ${argv.description} is ${argv.completed}`);
            break;
        case 'list':
            listTasks(pathName)
                .then(tasks => console.log(tasks))
                .catch(err => console.log(err));    
            break;
        default:  
            console.log(`command ${command} not valid`)
    }
}


menu(command);