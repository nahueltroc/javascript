class Personalizacion{
    constructor(altura, peso, ataque, defensa) {
    
     this.altura = altura;
    this.ataque = ataque;
    this.defensa = defensa;
    this.peso = peso; }
}


alert( "bienvenido a jueguito! seleccione una opcion");


let personaje = parseInt (prompt("elija que personaje quiere ser \nsi te gustaria ser orco presiona 1 \nsi te gustaria ser elfo presiona 2 \nsi te gustaria ser enano presiona 3"));


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

let per = parseInt(prompt("elija la opcion 1 para personalizar su personaje \n elija la opcion 2 para salir"));
let info;
let array = [];

 
    switch (per){
        case 1:
            let altura = parseInt(prompt("ingrese la altura"));
            let ataque = parseInt(prompt("ingrese el ataque"));
            let defensa = parseInt(prompt("ingrese la defensa"));
            let peso = parseInt(prompt("ingrese el peso"));
           info = new Personalizacion(altura, ataque, defensa, peso );
           array.push(info);
            break;
        case 2:
           let salir = parseInt(prompt("presione 2 para salir"));
            break;
    
    }


