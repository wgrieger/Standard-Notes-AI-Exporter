
const fs = require('node:fs');

let folderPath= "C:/Users/willg/Downloads/Standard Notes Export - Wed Sep 24 2025 16_26_50 GMT-0500"
let bundle = fs.readdirSync(folderPath,'utf8',withFileTypes=true)


// use when demoing with indiv notes 
        //let indivFilePath = "C:/Users/willg/Downloads/Standard Notes Export - Wed Sep 24 2025 16_26_50 GMT-0500/2024-12-11 at 12_31 PM Justin CAR Meeting.md"
        //let indivNote = fs.readFileSync(indivFilePath, 'utf8');

function cleanNote(note){
    let start = note.indexOf("![image.png]")
    let end = note.lastIndexOf(")");
    let img= note.slice(start,end+1)
    return note.replace(img,"")
}

//console.log(cleanNote(indivNote));

let notes = ""

bundle.forEach((file) => {
let path = folderPath + "/" + file
let fileContent = fs.readFileSync(path, 'utf8');

fileContent = cleanNote(fileContent)

notes += fileContent
})

let title = "lrtp2NotesRevised.txt"

fs.writeFileSync("C:/Users/willg/Downloads/"+title, notes, 'utf8');
