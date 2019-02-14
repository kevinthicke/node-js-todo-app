const { argv } = require('./config/yargs');
const { createTask, listTasks } = require('./controller');

const [ command ] = argv._;

//console.log(argv)

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
            listTasks(pathName).then(msg => console.log(msg)).catch(err => console.log(err));
            break;
        default:  
            console.log(`command ${command} not valid`)
    }
}


menu(command);