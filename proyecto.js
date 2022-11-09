
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

per = prompt("elija que quiere personalizar \n presione 1 altura, \n presione 2 ataque \n presione 3 defensa \n presione 4 peso ")

let info;

while(0 != 4){
    switch (per){
        case 1:
            let altura = parseInt(prompt("ingrese la altura"));
           info = new Personalizacion(altura, ataque, defensa, peso );
            break;
        case 2:
            let ataque = parseInt(prompt("ingrese el ataque"));
            break;
        case 3:
            let defensa = parseInt(prompt("ingrese la defensa"));
            break;
        case 4:
            let peso = parseInt(prompt("ingrese el peso"));
            break;
    }
}
