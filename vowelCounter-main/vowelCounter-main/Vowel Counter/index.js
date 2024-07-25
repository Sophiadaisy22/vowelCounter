const comment = document.getElementById("comment");
var inputa = document.getElementById("a");
var inpute = document.getElementById("e");
var inputi = document.getElementById("i");
var inputo = document.getElementById("o");
var inputu = document.getElementById("u");


function vowelCount(comment){
    const com = comment.value;
    

    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    let iCount = 0
    let uCount = 0
    let oCount = 0
    let aCount = 0
    let eCount = 0
    for( let i = 0; i < com.length; i++){
          let currentChar =com[i];
        if (currentChar  =="A"|| currentChar==="a") {
            aCount++;
        } 
        else if ( currentChar === "e" || currentChar === "E") {
            eCount++;
        } 
        else if (currentChar === "i" || currentChar === "I"){
             iCount++;
        } 
        else  if (currentChar === "o" || currentChar === "O"){
            oCount++;
        } 
        else if (currentChar=== "u" || currentChar === "U" ){
            uCount++;  
        }
        
        
        
    }  
    
    inputa.value = aCount;
    
    inpute.value = eCount;

    
    inputi.value = iCount;

    inputo.value = oCount;

    inputu.value = uCount;

    highestCount = Math.max(inputa.value, inpute.value, inputi.value, inputo.value, inputu.value);
    if (highestCount == inputa.value){
        inputa.style.backgroundColor= "lightblue";
    }
    else if (highestCount == inpute.value){
        inpute.style.backgroundColor= "lightblue";
    }
    else if (highestCount == inputi.value){
        inputi.style.backgroundColor= "lightblue";
    }
    else if (highestCount == inputo.value){
        inputo.style.backgroundColor= "lightblue";
    }
    else if (highestCount == inputu.value){
        inputu.backgroundColor= "lightblue";
    }


    arrayed = [inputa.value, inpute.value, inputi.value, inputo.value, inputu.value];
    sorted = arrayed.slice().sort((a, b) => b - a);
    secondHighest = sorted[1];
    if (secondHighest == inputa.value){
        inputa.style.backgroundColor= "green";
    }
    else if (secondHighest == inpute.value){
        inpute.style.backgroundColor= "green";
    }
    else if (secondHighest == inputi.value){
        inputi.style.backgroundColor= "green";
    }
    else if (secondHighest == inputo.value){
        inputo.style.backgroundColor= "green";
    }
    else if (secondHighest == inputu.value){
        inputu.backgroundColor= "green";
    }



    allValue = [inputa.value, inpute.value, inputi.value, inputo.value, inputu.value];
    sliced = allValue.slice().sort((a, b) => b - a);
    thirdHighest = sliced[2];

    console.log(thirdHighest);
    if (thirdHighest == inputa.value){
        inputa.style.backgroundColor= "gold";
    }
    else if (thirdHighest == inpute.value){
        inpute.style.backgroundColor= "gold";
    }
    else if (thirdHighest == inputi.value){
        inputi.style.backgroundColor= "gold";
    }
    else if (thirdHighest == inputo.value){
        inputo.style.backgroundColor= "gold";
    }
    else if (thirdHighest == inputu.value){
        inputu.backgroundColor= "gold";
    }




    
}




