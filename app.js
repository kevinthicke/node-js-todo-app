const { argv } = require('./config/yargs');
const { createTask, listTasks } = require('./controller');

const [ command ] = argv._;

const menu = command => {
    switch(command) {
        case 'create': 
            createTask(argv.description)
            break;
        case 'update':
            console.log(`update ${argv.description} is ${argv.completed}`);
            break;
        case 'list':
            const pathName = './db/tasks.json';
            listTasks(pathName).then(tasks => console.log(tasks));    
            break;
        default:  
            console.log(`command ${command} not valid`)
    }
}


menu(command);