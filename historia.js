const Mi_historia = () => {

let opcion;

do{
    opcion = prompt (
        "Menu\n"+
        "1. ¿Quieres escuchar mi historia de vida?\n"+
        "2. Estas aburrido, ¿ya quieres salir corriendo?\n"+
        "Ingresa una opción <3"
    );

    switch(opcion){
        case "1":
            alert("Desde pequeña siempre soñe muchas cosas, tuve una gran familia y una vida de ensueño, descubri que me gusta hacer cosas que me generen mucha alegria, como: programar, patinar, ver peliculas, escuchar musica. Basicamente me gusta todo tipo de música en especial el pop, le da un toque especial a mi vida. Pero como todo no es perfecto, es complicado a veces salir de la zona de confort y mas cuando toda la vida creciste desde el amor, encerrada en una bolita de cristal, al dia de hoy he aprendido, la vida me ha enseñado bastante y a pensar de que algun dia tenemos que levantarnos y darnos cuenta que ya nada es perfecto, que me faltan personas, siento que fue una hermosa experiencia haber tenido guuias de amor y enseñanza");
            break;
        case "2":
            alert("Chao amiguit@, finalizando programa.");
            break;
        default:
            alert("Ups! revisa porfa, opción incorrecta.");
    }
}while(opcion != "2");

}

Mi_historia()