let result = document.getElementById("result");
let equals = document.getElementById("equals");
let keys = document.getElementsByClassName("key");
let clear = document.getElementsByClassName("key-clear");
let keyOne = document.getElementsByClassName("key-one");
let main = document.getElementsByClassName("main-area")

// keys[0].addEventListener("click",display);

// function display(){
//    for(let i=0;i<keys.length;i++){
//     console.log(keys[i].innerText);
//    }
// }

function fillIn(value){
    if(result.innerText === 'Result'){
        result.innerText = '';}
    result.innerText += '' + value;
}

function clearResult(){
    result.innerText = '0';
}

function outputResult(){
   
     { 
         let rhs='';
         try {
                 rhs = eval(result.innerText); 
               } 
               catch (error) 
                {
                     rhs = 'Error: Invalid Equation';
                } 
                result.innerText = rhs;
}
}
