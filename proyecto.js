
alert( "bienvenido a jueguito! seleccione una opcion");


let personaje = parseInt (prompt("elija que personaje quiere ser \nsi te gustaria ser orco presiona 1 \nsi te gustaria ser elfo presiona 2 \nsi te gustaria ser enano presiona 3"));
let pepe = true;

switch (personaje){
    case 1:
        alert( "elejiste ser orco");
        break;
    case 2:
        alert("elejiste ser elfo");
        break;
    case 3:
        alert("elejiste ser enano");
        break;
}

alert("personalizemos tu personaje, eleji la altura, ataque, peso y defensa")

let personalizacion = promptInt(prompt("elija pues" + new Personalizacion())) 