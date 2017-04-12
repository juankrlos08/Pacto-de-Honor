var speedMult = 0.2;
var friction = 0.99
var character1;
var character2;

var perfilJugador = function(game){};
    perfilJugador.prototype = {
        preload : function(){
            game.scale.pageAlignHorinzontally = true;
            game.scale.pageAlignVertically = true;
            game.load.image('avatar','../img/Componentes/perfilJugador/avatar.png');
		    //game.load.image('AndresGallo','images/AndresGallo.png');
		    //game.load.image('CataCierva','images/CataCierva.png');
		    //game.load.image('AndresZorro','images/AndresZorro.jpg');
		    game.load.spritesheet('botonVolver', '../img/Componentes/navegacionMapa/botonVolver.png', 62, 62);
            game.load.spritesheet('boton-personaje', '../img/Componentes/perfilJugador/boton-personaje.png');
            game.load.spritesheet('boton-jefes', '../img/Componentes/perfilJugador/boton-jefes.png');
            game.load.spritesheet('boton-trofeo', '../img/Componentes/perfilJugador/boton-trofeo.png');
            game.load.spritesheet('boton-alfanumerico', '../img/Componentes/perfilJugador/boton-alfanumerico.png');
            //game.load.image('personajes', 'images/personajes.png');		
        },

        create : function (){
            game.stage.backgroundColor = "#2451A6";
		    game.add.sprite(50, 50,'avatar');
		
            game.add.button(0, 0,'botonVolver', this.verNavegacion, 1, 1, 0, 2);
            game.add.button(90, 290,'boton-personaje', null, 0, 0, 0, 0);
            game.add.button(450, 290,'boton-jefes', null, 0, 0, 0, 0);
            game.add.button(90, 450,'boton-trofeo', null, 0, 0, 0, 0);
            game.add.button(450, 450,'boton-alfanumerico', null, 0, 0, 0, 0);

            game.add.text(400, 50, "Perfil del usuario", {font: "25px Roboto", fill: "#ffffff"}).anchor.set(0.5);
            game.add.text(400, 130, "Nickname: -----", {font: "25px Roboto", fill: "#ffffff"}).anchor.set(0.5);
            game.add.text(600, 130, "Mundo: ----", {font: "25px Roboto", fill: "#ffffff"}).anchor.set(0.5);
            game.add.text(360, 200, "Nivel: 0", {font: "25px Roboto", fill: "#ffffff"}).anchor.set(0.5);
        },
        
        verNavegacion: function(){
            game.state.start("navegacion");
        },
        
        /*verLogros: function(){
            game.state.start("logros");
        },*/

        update : function(){

	   }
}