const inputFirstNum = document.getElementById("first-number");
const inputSecondNum = document.getElementById("second-number");
const inputThirdNum = document.getElementById("third-number");
const btnThrow = document.querySelector(".btn-throw");


btnThrow.addEventListener("click", function () {



    const totNum = parseInt(inputFirstNum.value) + parseInt(inputSecondNum.value) + parseInt(inputThirdNum.value);
    console.log(totNum);

    if (totNum > 18 ||  inputFirstNum.value >= 7 || inputSecondNum.value >= 7 || inputThirdNum.value >= 7 ) {
        document.getElementById("result").innerHTML = "NON BARARE 😒";

    }
    else if(inputFirstNum.value === "" || inputSecondNum.value === "" || inputThirdNum.value === ""){
        document.getElementById("result").innerHTML = "INSERISCI QAULCOSA DI VALIDO 😒";

    }
    else {


        const COM1 = Math.floor(Math.random() * 6 + 1);
        document.getElementById("dado-COM1").innerHTML = `${COM1}`;
        const COM2 = Math.floor(Math.random() * 6 + 1);
        document.getElementById("dado-COM2").innerHTML = `${COM2}`;
        const COM3 = Math.floor(Math.random() * 6 + 1);
        document.getElementById("dado-COM3").innerHTML = `${COM3}`;

        const totCOM = parseInt(COM1) + parseInt(COM2) + parseInt(COM3);
        console.log(totCOM)

        if (totCOM > totNum) {
            document.getElementById("result").innerHTML = "HAI PERSO";

        }
        else if (totCOM === totNum) {
            document.getElementById("result").innerHTML = "HAI PAREGGIATO";


        }
        else {
            document.getElementById("result").innerHTML = "HAI VINTO";

        }

    }

})
