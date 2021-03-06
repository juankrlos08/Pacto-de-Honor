vN = {
    btMundo:null, 
    btMundo2:null, 
    btMundo3:null, 
    btMundo4:null, 
    btMundo5:null,
    btMundo6:null,
    btMundo7:null,
    btMundo8:null,
    btMundo9:null,
    btMundo10:null, 
    btMundo11:null, 
    btMundo12:null,
    btnCaja:null,
    text:0,
    text2:0,
    text3:0,
    text4:0,
    text5:0,
    text6:0,
    text7:0,
    text8:0,
    text9:0,
    text10:0,
    text11:0,
    text12:0,
    music:null,
    musicButton:null
};

//var nV.vN.music;
//var nV.vN.musicButton;
//var btMundo, btMundo2, btMundo3, btMundo4, btMundo5 ,btMundo6 ,btMundo7 ,btMundo8 ,btMundo9 ,btMundo10, btMundo11, btMundo12;
///var ;
var navegacion = function(game){};
    navegacion.prototype = {
    preload: function() {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.load.audio('sonidos','../img/Componentes/sonidos/mapa/mapa.mp3');
        game.load.audio('sonidoBoton', '../img/Componentes/sonidos/Botones/1.mp3');
        game.load.spritesheet('btMundo2', '../img/Componentes/navegacionMapa/pause.png', 50,50);
        game.load.image('monedas', '../img/Componentes/navegacionMapa/monedas.png');
        game.load.image('fondo', '../img/Componentes/navegacionMapa/mapaNavegacion.png');
        game.load.image('close', '../img/Componentes/navegacionMapa/orb.png');
        game.load.spritesheet('nivel1', '../img/Componentes/navegacionMapa/nivel1.png', 192,71);
        game.load.spritesheet('nivel2', '../img/Componentes/navegacionMapa/nivel2.png', 192,71);
        game.load.spritesheet('nivel3', '../img/Componentes/navegacionMapa/nivel3.png', 192,71);
        game.load.spritesheet('nivel4', '../img/Componentes/navegacionMapa/nivel4.png', 192,71);
        game.load.spritesheet('nivel5', '../img/Componentes/navegacionMapa/nivel5.png', 192,71);
        game.load.spritesheet('nivel6', '../img/Componentes/navegacionMapa/nivel6.png', 192,71);
        game.load.spritesheet('botonCreditos', '../img/Componentes/navegacionMapa/botonCreditos.png', 62, 62);
        game.load.spritesheet('botonAmigos', '../img/Componentes/navegacionMapa/botonAmigos.png', 62, 62);
        game.load.spritesheet('botonPerfil', '../img/Componentes/navegacionMapa/botonPerfil.png', 62, 62);
        game.load.spritesheet('botonRanking', '../img/Componentes/navegacionMapa/botonRanking.png', 62, 62);
        game.load.spritesheet('botonSonido', '../img/Componentes/navegacionMapa/botonSonido.png', 62, 62);
        game.load.spritesheet('botonCerrarSesion', '../img/Componentes/navegacionMapa/botonCerrarSesion.png', 62, 62);
        game.load.spritesheet('botonAjustes', '../img/Componentes/navegacionMapa/botonAjustes.png', 62, 62);
        //game.load.spritesheet('botonCajaSorpresa', '../img/Componentes/cajas/cajam.png', 132, 216);
        game.load.spritesheet('botonCajaSorpresa', '../img/Componentes/navegacionMapa/cajanegra.png', 62, 62);
        game.load.spritesheet('botonCompraPersonajes', '../img/Componentes/navegacionMapa/botonCompraPersonajes.png', 62, 62);
        game.load.spritesheet('pause12', '../img/Componentes/navegacionMapa/pause12.png', 50,50);
        game.load.spritesheet('pause13', '../img/Componentes/navegacionMapa/pause13.png', 50,50);
        game.load.spritesheet('pause14', '../img/Componentes/navegacionMapa/pause14.png', 50,50);
      

        
    },

    //se agrega el fondo y se crean los botones de los mundos en donde tenemos button(medida en x, medida en y, nombre de la imagen, la funcion, sprites)
    create:function() {
        game.add.sprite(0, 0, 'fondo');
        game.add.sprite(80, 10, 'monedas');

        botonCreditos = game.add.button(735, 70, 'botonCreditos', this.verCreditos, 1, 1, 0, 2);
        botonSonido = game.add.button(735, 135, 'botonSonido', this.quitarSonido, 1, 1, 0, 2);
        botonCerrarSesion = game.add.button(735, 200, 'botonCerrarSesion', this.cerrarSesion, 1, 1, 0, 2);
        botonCreditos.visible = false;
        botonSonido.visible = false;
        botonCerrarSesion.visible = false;
        botonAjustes = game.add.button(735, 5, 'botonAjustes', this.verAjustes, 1, 1, 0, 2);
        botonAmigos = game.add.button(670, 5, 'botonAmigos', this.verInvitarAmigos, 1, 1, 0, 2);
        botonPerfil = game.add.button(5, 5, 'botonPerfil', this.verPerfil, 1, 1, 0, 2);
        botonRanking = game.add.button(605, 5, 'botonRanking', this.verRankings, 1, 1, 0, 2);
       //btnCaja = game.add.button(415, 5, 'botonCajaSorpresa', this.verCajaMisteriosa);//475
        vN.btnCaja = game.add.button(475, 5, 'botonCajaSorpresa', this.verCajaMisteriosa,1,1,0,2);//475
        botonCompraPersonajes = game.add.button(540, 5, 'botonCompraPersonajes', this.verCompraPersonajes, 1, 1, 0, 2);
        game.add.text(160, 20, "999999", {font: "16px Roboto", fill: "#ffffff"}); //Label monedas     
       
        vN.btMundo = game.add.button (80, 60, 'pause13', this.mundo1, 0, 0, 0, 1);
        vN.btMundo.scale.setTo(0.8, 0.8);
        vN.btMundo.input.useHandCursor = true;
        vN.text = game.add.text(13,1, "1", { font: "40px Arial", fill: "#030300"});
        vN.btMundo.addChild(vN.text);
    
        vN.btMundo2 = game.add.button (90, 500, 'pause13',this.mundo2, 0, 0, 0, 1);
        vN.btMundo2.scale.setTo(0.8, 0.8);
        vN.btMundo.input.useHandCursor = true;
        vN.text2 = game.add.text(13,1, "2", {font: "40px Arial", fill: "#030300"});
        vN.btMundo2.addChild(vN.text2);
        
        vN.btMundo3 = game.add.button (250, 450, 'pause13', this.mundo3, 0, 0, 0, 1);
        vN.btMundo3.scale.setTo(0.8, 0.8);
        vN.text3 = game.add.text(13,1, "3", { font: "40px Arial", fill: "#030300"});
        vN.btMundo3.addChild(vN.text3);    

        vN.btMundo4 = game.add.button (280, 220, 'pause13', this.mundo4, 0, 0, 0, 1);
        vN.btMundo4.scale.setTo(0.8, 0.8);
        vN.text4 = game.add.text(13,1, "4", { font: "40px Arial", fill: "#030300"});
        vN.btMundo4.addChild(vN.text4);
        
        vN.btMundo5 = game.add.button (330, 80, 'pause13', this.mundo5, 0, 0, 0, 1);
        vN.btMundo5.scale.setTo(0.8, 0.8);
        vN.text5 = game.add.text(13,1, "5", { font: "40px Arial", fill: "#030300"});
        vN.btMundo5.addChild(vN.text5);    

        vN.btMundo6 = game.add.button (430, 500, 'pause13', this.mundo6, 0, 0, 0, 1);
        vN.btMundo6.scale.setTo(0.8, 0.8);
        vN.text6 = game.add.text(13,1, "6", { font: "40px Arial", fill: "#030300"});
        vN.btMundo6.addChild(vN.text6);    

        vN.btMundo7 = game.add.button (520, 220, 'pause13',this.mundo7, 0, 0, 0, 1);
        vN.btMundo7.scale.setTo(0.8, 0.8);
        vN.text7 = game.add.text(15,1, "7", { font: "40px Arial", fill: "#030300"});
        vN.btMundo7.addChild(vN.text7);
        
        vN.btMundo8 = game.add.button (580, 200, 'pause13', this.mundo8, 0, 0, 0, 1);
        vN.btMundo8.scale.setTo(0.8, 0.8);
        vN.text8 = game.add.text(13,1, "8", { font: "40px Arial", fill: "#030300"});
        vN.btMundo8.addChild(vN.text8);    

        vN.btMundo9 = game.add.button (550, 80, 'pause13', this.mundo9, 0, 0, 0, 1);
        vN.btMundo9.scale.setTo(0.8, 0.8);
        vN.text9 = game.add.text(13,1, "9", { font: "40px Arial", fill: "#030300"});
        vN.btMundo9.addChild(vN.text9);
    
        vN.btMundo10 = game.add.button (680, 140, 'pause13', this.mundo10, 0, 0, 0, 1);
        vN.btMundo10.scale.setTo(0.8, 0.8);
        vN.text10 = game.add.text(6,3, "10", { font: "35px Arial", fill: "#030300"});
        vN.btMundo10.addChild(vN.text10);    
   
        vN.btMundo11 = game.add.button (700, 240, 'pause13', this.mundo11, 0, 0, 0, 1);
        vN.btMundo11.scale.setTo(0.8, 0.8);
        vN.text11 = game.add.text(9,3, "11", { font: "35px Arial", fill: "#030300"});
        vN.btMundo11.addChild(vN.text11);    

        vN.btMundo12 = game.add.button (750, 480, 'pause14',this.mundo12, 0, 0, 0, 1);
        vN.btMundo12.scale.setTo(0.8, 0.8);
        vN.text12 = game.add.text(5,1, "12", { font: "35px Arial", fill: "#030300"});
        vN.btMundo12.addChild(vN.text12);
        
        vN.music = game.add.audio('sonidos');
        vN.musicButton = game.add.audio('sonidoBoton');
        vN.music.loop = true;
        vN.music.play();
    },
  
    verAjustes: function(){
        botonCreditos.visible =! botonCreditos.visible;
        botonSonido.visible =! botonSonido.visible;
        botonCerrarSesion.visible =! botonCerrarSesion.visible;
    },        
    verCreditos: function(){
            game.state.start("creditos");
    },
    quitarSonido: function(){
            if(vN.music.paused){
               vN.music.resume();
            }
        else{
            vN.music.pause();
        }        
    },
    cerrarSesion: function(){
            alert("Sesion cerrada");
    },
    verInvitarAmigos: function(){
        game.state.start("invitarAmigos");
        vN.musicButton.play();
        vN.music.pause();
    },    
    verPerfil: function(){
        game.state.start("perfilJugador");
        vN.musicButton.play();
        vN.music.pause();
    },
    verCajaMisteriosa: function(){
        game.state.start("cajaMisteriosa");
        vN.musicButton.play();
        vN.music.pause();
    },     
    verRankings: function(){
        game.state.start("rankings");
        vN.musicButton.play();
        vN.music.pause();
    },    
    verCompraPersonajes: function(){
        game.state.start("compraPersonajes");
        vN.musicButton.play();
        vN.music.pause();
    },

        mundo1: function(){            
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo1");
        },
        mundo2:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo2");
        },
        mundo3:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo3");
        },
        mundo4:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo4");
        },
        mundo5:function(){
            pruebasPsicotecnicas.setPrueba19(true);            
            game.state.start("Mundo5");
        },
        mundo6:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo6");
        },
        mundo7:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo7");
        },
        mundo8:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo8");
        },
        mundo9:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo9");
        },
        mundo10:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo10");
        },
        mundo11:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo11");
        },
        mundo12:function(){
            pruebasPsicotecnicas.setPrueba19(true);
            game.state.start("Mundo12");
        },
    
    iniciarNivel: function(lvl) {
        pruebasPsicotecnicas.setPrueba20(true);
        variablesCampoBatalla.idNivel = lvl;
        variablesCampoBatalla.idPC = niveles[lvl].idEnemigo;
        game.state.start("seleccionpersonaje");
        vN.musicButton.play();
        vN.music.pause();
    }
}