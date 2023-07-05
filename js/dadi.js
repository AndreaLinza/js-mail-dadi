let player = document.getElementById("dado-player");
let COM = document.getElementById("dado-COM");
const btnThrow = document.querySelector(".btn-throw");


btnThrow.addEventListener("click", function () {

    player = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dado-player").innerHTML = `${player}`;

    COM = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dado-COM").innerHTML = `${COM}`;

    if (player > COM) {
    document.getElementById("result").innerHTML = "Alessio Ha Vinto!!!!"
    }
    else if (player === COM) {
        document.getElementById("result").innerHTML = "Avete pareggiato"
    }
    else {
        document.getElementById("result").innerHTML = "Michele Hai Vinto!!!!"
    }


}
)


