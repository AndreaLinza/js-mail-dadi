
// Dichiarazioni constanti
const mailList = ["al@li.it", "superflorian@boolean.it", "salvatorebono@superhot.it", "payeturo7@libero.it", "corradobullizzaflorian@scusala.com", "pasqualemafiolikeme@bang.shoot"]
const mail = document.getElementById("input-email");
const btnSubmit = document.querySelector(".btn-submit");



// button submit
btnSubmit.addEventListener("click", function () {
    // dichiarazione variabile booleana
    let mailCheck = false;
    // Ciclo for
    for (let i = 0; i < mailList.length; i++) {

        const mailInput = mail.value;
        // condizione per il ciclo
        if (mailInput === mailList[i]) {
            mailCheck = true;
        }

    }
    // condizioni a fine ciclo
    if (mailCheck === true) {
        document.getElementById("check").innerHTML = "ok"
        console.log("complimenti");
    }
    else {

        document.getElementById("check").innerHTML = "!!!riprova!!!"
        console.log("riprova");
    }
})

