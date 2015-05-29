var mainState = {
    
    preload: function () {
        //Carreguem les imatges
        game.load.image('background', 'assets/Casa.png');
        game.load.image('player', 'assets/slug1.png');
        
        game.load.image('tileset', 'assets/tileset.png');
        game.load.tilemap('map','assets/TiledMetalSlug.json', null, Phaser.Tilemap.TILED_JSON);
        
    },
    
    create: function () {
        //Crear el fondo i posar-lo a la posició 0,0
        game.add.image(0,0,'background');
        
        this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
        
        //Fisiques
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(this.player);
        
        //Moure Jugador
        this.cursor = game.input.keyboard.createCursorKeys();       
        
        //Propietats del player
        
        this.player.anchor.setTo(0.5, 0.5);
        this.player.scale.setTo(1.5,1.5);
        
        this.createWorld();
        
    },
    
    update: function() {
        this.movePlayer();
    },
    
    
   movePlayer: function () {
        if (this.cursor.left.isDown) {
            this.player.body.velocity.x = (-200);
        }
        else if(this.cursor.right.isDown) {
            this.player.body.velocity.x = 200;
        }
        else {
            this.player.body.velocity.x = 0;
        }
    },
    
    createWorld: function() {
        this.map = game.add.tilemap('map');
    
        this.map.addTilesetImage('tileset');
        
        this.layer = this.map.createLayer('Capa de Patrones1');
        
        this.layer.resizeWorld();    
    
    }
    
    
    
    
    

}

var game = new Phaser.Game(947, 631,Phaser.AUTO,'gameDiv');
    
game.state.add('main',mainState); //afegirm un estat, pantallas
game.state.start('main');//executem main