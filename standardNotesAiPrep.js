
const fs = require('node:fs');

//has to be forward slash 
let folderPath= "C:/Users/willg/Downloads/export"
let bundle = fs.readdirSync(folderPath,'utf8',withFileTypes=true)


// use when demoing with indiv notes 
        // let indivFilePath = "C:/Users/willg/Downloads/"
        // let indivNote = fs.readFileSync(indivFilePath, 'utf8');
 
function cleanNote(note){    
    let cleanedNote = note
    let results = cleanedNote.match(/!\[image.png\]\(.*\)/g)

    if (cleanedNote.indexOf("![image.png]") != -1){
    results.forEach((result) => {
        cleanedNote = cleanedNote.replace(result, "")
    })
        }

        return cleanedNote
    }

//below starts the bundling process
    let notes = ""

    bundle.forEach((file) => {
    let path = folderPath + "/" + file
    let fileContent = fs.readFileSync(path, 'utf8');

    fileContent = cleanNote(fileContent)

    notes += fileContent
    })

    let title = "AI Notebook 09 25 25.txt"

    fs.writeFileSync("C:/Users/willg/Downloads/"+title, notes, 'utf8');
