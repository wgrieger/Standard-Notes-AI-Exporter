//update pushed november 10, 2025

const fs = require('node:fs');

//has to be forward slash 
let folderPath= "C:/Users/willg/Downloads/Portfolio Raw 10 23 25" // enter folder where docs are here

let bundle = fs.readdirSync(folderPath,'utf8',withFileTypes=true) //returns the list of file names 


// use when demoing with indiv notes 
        // let indivFilePath = "C:/Users/willg/Downloads/"
        // let indivNote = fs.readFileSync(indivFilePath, 'utf8');
 
function cleanNote(note){    
    let cleanedNote = note.replace(/!\[[^\]]*\]\(.*\)/g,"")

    cleanedNote = cleanedNote.replace(/\n{2,}/g, '\n');


    // let isClean = false    

        // while(isClean == false){

        //     let image = cleanedNote.match(/!\[.*\.png\]\(.*\)/g)
        
        //     cleanedNote = cleanedNote.replace(image, "")

        //     if(cleanedNote.search(/!\[*.png\]\(.*\)/g)==-1){
        //         isClean=true
        //     }
            
        // }



        return cleanedNote
    }

//below starts the bundling process
    let notes = ""

    bundle.forEach((file) => {
    let path = folderPath + "/" + file //creates the file destination

    let findTheDotForFileType= file.lastIndexOf('.')
    let remainingLength = file.length-file.lastIndexOf('.')
    let fileType = file.slice(findTheDotForFileType,file.length)

        if(fileType== (".md" || ".txt")){
            let fileContent = fs.readFileSync(path, 'utf8');

            fileContent = cleanNote(fileContent)

            notes += fileContent
        }

    })

    let title = folderPath.slice(folderPath.lastIndexOf('/')+1) + " AI Notebook.txt"

    fs.writeFileSync("C:/Users/willg/Downloads/"+title, notes, 'utf8');

    console.log("script ran successfully")
