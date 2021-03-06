    href=batalla.js;
	href=funcionesBatalla.js;
var fin = {
    preload: function(){
		this.preloadBar=this.add.sprite(this.game.world.centerX,this.game.world.centerY,'barraCarga');
		
        game.load.image('poli', '../img/componentes/finBatalla/poli.jpg');
        game.load.spritesheet('gallo1', '../img/sprites/personajesBuenos/gallo.png', 200, 200);
        game.load.image('monedas','../img/Componentes/finBatalla/moneda.png');
        
        game.load.image('experiencia','../img/Componentes/finBatalla/experiencia.png');
        game.load.spritesheet('botonVolver','../img/Componentes/finBatalla/botonVolver.png',598,140);
        
        
    },
    create: function(){
		var resultado;
		var color;
		if(!ganadorBatalla){
			resultado = "GANASTE";
			color = {fill:'#01DF01',font: '40px Arial'};
		}else{
			resultado = "PERDISTE";
			color = {fill:'#DF0101',font: '40px Arial'};
		}
		if(dispositivoMovil){
			
			/*
			*
			*
			*  Falta modificar la pantalla para dispositivos moviles 
			*
			*/
			game.add.sprite(0, 0, 'poli');
        	gallo1 = game.add.sprite(game.world.width/2,game.world.height/1.3, 'gallo1');
        	gallo1.scale.setTo(1.1);
        	gallo1.anchor.setTo(1.1);
        	gallo1.frame = 24;
        
        	var name = 'name user'
        	win= game.add.text(game.world.width/3,game.world.height/4,resultado,color);
        	win.anchor.x=0.5;
        	win.anchor.y = 0.5;
        
        	game.add.text(game.world.width/5,game.world.height/1.25,name,color);

        	//se agrega el icono de las monedas ganadas por el jugador
        	monedas = game.add.sprite(game.world.width/1.7,game.world.height/2.5,'monedas');
        	monedas.scale.setTo(0.6);
        	monedas.anchor.setTo(0.4);
        
        	//se agrega el boton de experiencia
        	experiencia = game.add.sprite(game.world.width/1.7,game.world.height/1.5,'experiencia');
        	experiencia.scale.setTo(0.6);
        	experiencia.anchor.setTo(0.4);
        
        	//textos de la monedas y experiencia obtenida
        	game.add.text(game.world.width/1.4,game.world.height/2.78,'+ 250 ',{fill:'#FF8000',font: '40px Arial'});
        
        	game.add.text(game.world.width/1.4,game.world.height/1.58,'+ 350',{fill:'#2E64FE',font: '40px Arial'});
        
        	//se le agrega el boton que lo devuelve a la pantalla principal
        	volver = game.add.button(game.world.width/1.53,game.world.height/1.2,'botonVolver',this.volver,1,1,0,2);
        	volver.scale.setTo(0.4);
        	volver.anchor.setTo(0.3);
				
		}else{
			game.add.sprite(0, 0, 'poli');
        	gallo1 = game.add.sprite(game.world.width/2,game.world.height/1.3, 'gallo1');
        	gallo1.scale.setTo(1.1);
        	gallo1.anchor.setTo(1.1);
        	gallo1.frame = 24;
        
        	var name = 'name user'
        	win= game.add.text(game.world.width/3,game.world.height/4,resultado,color);
        	win.anchor.x=0.5;
        	win.anchor.y = 0.5;
        
        	game.add.text(game.world.width/5,game.world.height/1.25,name,color);

        	//se agrega el icono de las monedas ganadas por el jugador
        	monedas = game.add.sprite(game.world.width/1.7,game.world.height/2.5,'monedas');
        	monedas.scale.setTo(0.6);
        	monedas.anchor.setTo(0.4);
        
        	//se agrega el boton de experiencia
        	experiencia = game.add.sprite(game.world.width/1.7,game.world.height/1.5,'experiencia');
        	experiencia.scale.setTo(0.6);
        	experiencia.anchor.setTo(0.4);
        
        	//textos de la monedas y experiencia obtenida
        	game.add.text(game.world.width/1.4,game.world.height/2.78,'+ 250 ',{fill:'#FF8000',font: '40px Arial'});
        
        	game.add.text(game.world.width/1.4,game.world.height/1.58,'+ 350',{fill:'#2E64FE',font: '40px Arial'});
        
        	//se le agrega el boton que lo devuelve a la pantalla principal
        	volver = game.add.button(game.world.width/1.53,game.world.height/1.2,'botonVolver',this.volver,1,1,0,2);
        	volver.scale.setTo(0.4);
        	volver.anchor.setTo(0.3);
		}
    },
    volver: function(){
        game.state.start('navegacion');
    }
}