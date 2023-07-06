let inputNum = parseInt(document.querySelector(".first-number"));
//const InputSecondNum = parseInt(document.querySelector(".second-number"));
//const inputThirdNum = parseInt(document.querySelector(".third-number"));
const btnThrow = document.querySelector(".btn-throw");
let COM = document.getElementById("dado-COM"); 
//let COM2 = document.getElementById("dado-COM"); 
//let COM3 = document.getElementById("dado-COM"); 


const totalNum = inputNum + inputNum+ inputNum ;

btnThrow.addEventListener("click", function(){


    for (let i = 0; i <= 3; i++){
        
        COM = Math.floor(Math.random() * 6 + 1);
        document.getElementById("dado-COM").innerHTML = `${COM}`; 
    }
    //COM2 = Math.floor(Math.random() * 6 + 1);
    //document.getElementById("dado-COM").innerHTML = `${COM2}`; 
    //COM3 = Math.floor(Math.random() * 6 + 1);
    //document.getElementById("dado-COM").innerHTML = `${COM3}`;
    

})
