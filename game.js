var config = {
  width: 1280,
  height: 720,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2, Scene3, Scene4],
  pixelArt: true,
  dom: {
    createContainer: true
  },
  physics: {
    default: "arcade",
    arcade:{
        debug: false,
        debugShowVelocity: false
    }
  }
}


var game = new Phaser.Game(config);
