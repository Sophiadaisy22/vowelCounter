const comment = document.getElementById("comment");
const a = document.getElementById("a");
const e = document.getElementById("e");
const i = document.getElementById("i");
const o = document.getElementById("o");
const u = document.getElementById("u");


function vowelCount(comment){
    const com = comment.value;
    

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    count = 0;
    

    for( let i = 0; i < com.length; i++){
        if ( com[i] === "a" || com[i] === "e" ||  com[i] === "i" || com[i] === "o" || com[i] === "u" ){
            count++;
            
        }
    }
    
    return count;

    
}


