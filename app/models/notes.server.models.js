let id = 0
function getId(){
    id++;
    return id-1;
}
let notes = [
    { id: getId(), note: 'A test note!', timestamp: 1623730192989 },
    { id: getId(), note: 'Another test note!', timestamp: 1623802234913 },
    ]

exports.getAll = function(){
    console.log(notes)
    return notes
};

exports.getOne = function(id){
    for (const note of notes) {
        if (id === note.id){
            return note
        }
    }
    return null
};

exports.insert = function(note, timestamp){
    notes.push({
        id: getId(),
        note: note,
        timestamp: timestamp
    })
    console.log(notes)
    return notes    
};

exports.alter = function(id, noteMessage){
        for (let note of notes) {
            if (id === note.id) {
                note.note = noteMessage;
                return note
            }
        }
        return null
};

exports.remove = function(id){
    let index = -1
    for (let note of notes) {
        if (id === note.id) {
            index = notes.indexOf(note)
            notes.splice(index, 1)
            break
        }
    }
    if (index >= 0) {
        return true
    }
    return null
};
