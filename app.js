let download = document.getElementById("download"); // Récupère l'élément "télécharger'
let show = document.getElementById("show"); // Récupère la box

let check = document.getElementById("check"); // Récupère ma checkbox
let myCancel = document.getElementById("cancel"); // Récupère mon cancel
let myConfirm = document.getElementById("confirm"); // Récupère mon CONFIRM

myConfirm.title = "Confirmer"
show.style.display = 'none'

function Open() {
    let winOpen = window.open('téléchargement.rar');
}
function Close() {
    show.style.display = 'none'
    // window.close();
}



download.addEventListener("click", function (){
    show.style.display = 'flex'
    myCancel.addEventListener("click", function (){
        show.style.display = 'none'
    })
})

myConfirm.addEventListener("click", function (){
    if (check.checked){
        Open()
        console.log(check)
    }
    else{
        alert("Vous n'avez accepter nos conditions..")
    }
    myCancel.addEventListener("click", function (){
        Close()
    })
})