let cuentas = [
    { nombre: "Mali", email: "mali@correo.com", password: "abc1", saldo: 200 },
    { nombre: "Gera", email: "gera@correo.com", password: "abc2", saldo: 290 },
    { nombre: "Maui", email: "maui@correo.com", password: "abc3", saldo: 67 },
];

let cuenta_activa = 0;
let userValue = "";
let passValue = "";

const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");




userInput.addEventListener("change", function (event) {
    userValue = event.target.value;
    console.log(userValue);
});

passwordInput.addEventListener("change", function (event) {
    passValue = event.target.value;
    console.log(passValue);
});

loginButton.addEventListener("click", function (event) {
    //aqui se pone el codigo para loguearte
    cuenta_activa = -1;
    for(let i = 0; i< cuentas.length;i++){
        if(userValue === cuentas[i].email && passValue === cuentas[i].password){
            console.log("usuario encontrado");
            cuenta_activa = i;
            document.getElementById("login").style.display = 'none';
            document.getElementById("cajero").style.display = 'block';
            document.getElementById("nombreUsuario").textContent = cuentas[cuenta_activa].nombre;

        }
    }
    if(cuenta_activa === -1){
        alert("Error de contraseña o usuario");
    }
});

function consultarSaldo(){
    alert(`El saldo de tu cuenta es: ${cuentas[cuenta_activa].saldo}`)

}

function ingresarMonto(){
    const montoIngresar = parseFloat(document.getElementById("montoIngresar").value);
    if(cuentas[cuenta_activa].saldo + montoIngresar <= 990){
        cuentas[cuenta_activa].saldo += montoIngresar;
        alert(`Monto ingresado satisfactoriamente el saldo es: $${cuentas[cuenta_activa].saldo}`)
    }else{
        alert("Error , la cantidad supera los $ 990");
    }

}

function retirarMonto(){
    const montoRetirar = parseFloat(document.getElementById("montoRetirar").value);
    if(cuentas[cuenta_activa].saldo - montoRetirar >= 10){
        cuentas[cuenta_activa].saldo -= montoRetirar;
        alert(`Monto retirado satisfactoriamente el saldo es: $${cuentas[cuenta_activa].saldo}`);
    }else {
        alert("Error, la cuenta no se puede quedar con menos de $10")
    }
}

function finalizarSesion(){
 cuenta_activa = 0;
 userValue = "";
 passValue = "";
 document.getElementById("login").style.display = 'flex';
 document.getElementById("cajero").style.display = 'none';
 userInput.value = "";
 passwordInput.value = "";

}