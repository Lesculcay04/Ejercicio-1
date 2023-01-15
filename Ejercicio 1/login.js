const USER="admin";
const PASSWORD_DEFAULT="s3cr3t";
let userName= prompt("ingrese su email");
let password=prompt("ingrese su contraseña");
if(userName==USER&&password==PASSWORD_DEFAULT){
    console.log("Correcto");
}
else{
    console.log("Incorrecto");
}
console.log("Adios");