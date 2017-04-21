var game = new Phaser.Game (800,600, Phaser.CANVAS, 'container');
    game.state.add("historieta", historieta);
    game.state.add("navegacion", navegacion);
    game.state.add("batalla", batalla);
    game.state.add("boot",boot);
    game.state.add("creditos", creditos);
    game.state.add("compraPersonajes", compraPersonajes);
    game.state.add("rankings", rankings);
    game.state.add("invitarAmigos", invitarAmigos);
    game.state.add("perfilJugador", perfilJugador);
    game.state.add("logros", logros);
    game.state.add("seleccionpersonaje", seleccionpersonaje);    
    game.state.add("seleccionavatar", seleccionavatar);
    game.state.add("fin", fin);    
	game.state.start("boot");