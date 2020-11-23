class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      this.load.image("background", "assets/images/background.jpg");
      this.load.image("card-back", "assets/images/Cards/cardBack_red5.png");
      this.load.image("card-club-2", "assets/images/Cards/cardClubs2.png");
    }
  
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");
    }
  }
  