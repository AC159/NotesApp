const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
    return 'Your notes...';
}

//---------------------------------------------------
const addNote = (title, body) => {

    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New note added...')
    }else {
        console.log('Note title already taken...')
    }

}

//---------------------------------------------------

const removeNote =  (title) => {

    const notes = loadNotes()

    const  noteToKeep = notes.filter((note) =>
        note.title !== title
    )

    saveNotes(noteToKeep)

    if (noteToKeep.length !== notes.length) {
        console.log(chalk.bgRed('Note has been removed...'))
    }else {
        console.log(chalk.bgGreen('No such note found...'))
    }

}

//---------------------------------------------------
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}
//---------------------------------------------------

const loadNotes = () => {

    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()

        return JSON.parse(dataJson)

    }catch (e) {
        return []
    }
}
//---------------------------------------------------

const listNotes = () => {

    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()

        return JSON.parse(dataJson)

    }catch (e) {
        console.log(chalk.bgRed('No notes available...'))
    }

}
//---------------------------------------------------
const readNote = (title) => {

    const notes = loadNotes()

    return notes.find((note) => note.title === title)


}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}