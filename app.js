const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv['title'])
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of note to be read',
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        const note = notes.readNote(argv.title)
       if (note !== undefined){
           console.log(note)
       }else{
           console.log(chalk.bgRedBright('No such note found...'))
       }
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log(chalk.bgBlue('Here are your notes:'))
        console.log(notes.listNotes())
    }
})

yargs.parse()