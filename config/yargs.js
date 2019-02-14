const argv = require('yargs')
    .command(
        'create', 'create new task', {
            description: {
                demand: true,
                alias: 'd',
                desc: 'create task description'
            }
        })
    .command(
        'update', 'update task', {
            description: {
                demand: true,
                alias: 'd',
                desc: 'update task description'
            },
            completed: {
                demand: false,
                alias: 'c',
                desc: 'check if the task is completed'
            }
        }
    )
    .command(
        'list', 'list tasks', {}
    )
    .help().argv;

module.exports = {
    argv
}