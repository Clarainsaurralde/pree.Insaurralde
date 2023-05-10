let usuario= "Clara";
let password="0303456";
let ingresar= false;
let ingresac= false;

saludar()


function saludar() {
    alert("Hola, bienvenidx");
}

for (let i = 2; i >= 0; i--) {

    let ingresoElUsuario = prompt("ingresa tu usuario , Tenes " + (i + 1) + " Oportunidades")
    let ingresoElPass = prompt("ingresa tu contraseña , Tenes " + (i + 1) + " Oportunidades")

    if (ingresoElUsuario == usuario && (ingresoElPass == password)) {
        alert("Bienvenido Usuario/a");
        ingresar = true;
        break;
    }
    else {
        alert("es incorrecto , vuelva intentar")
    }
}

if (ingresar) {

    let stock = 25;

    let opcion = prompt(
        "Elegi una opcion: \n1- stock. \n2- producto. \n3- marca. \nPresiona X para finalizar.");

    while (opcion != "x") {

        switch (opcion) {
            case "1":

                alert("la cantidad de productos que hay son: " + stock);
           
                break;
            case "2":
                let producto= parseInt(prompt(" Ingresa el producto que quiera ver"))
                let opcion = prompt(
                    "Elegi una opcion: \n1- arroz. \n2- galletas.");
                if (Retiro =-1) {
                    alert("Su stock total es de "+ stock -1)
                }
                else {

                    alert("opcion no valida")

                }
                break;
            case "3":
                let marca = (prompt("Ingresa la marca"));


                alert(productoTotal)
                break;

        }

        opcion = prompt(
            "Elegi una opcion: \n1- stock. \n2- producto. \n3- marca. \nPresiona X para finalizar.");
    }



}