class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");

  }
  create() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    const card = this.add.sprite(config.width * 0.5, config.height * 0.5, 'card-back');
    
    this.input.on(Phaser.Input.Events.POINTER_UP, ()=> {
      this.flip(card)
    })
  }

  flip(card){
    // const timeline = this.tweens.timeline()

    // timeline.add({
    //   targets: card,
    //   scale: 1.1,
    //   duration: 300
    // })

    // timeline.play()
  }

  // update() { 
  // }

}
