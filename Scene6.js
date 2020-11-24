class Scene6 extends Phaser.Scene {
    constructor() {
      super("Timer");
    }

    preload() {
    }

    create() {

        var cam = this.cameras.add(0,0,1280,720);
        cam.setBackgroundColor(0xffffff);

        var bar = this.add.graphics();
        // console.log(bar);
        bar.fillStyle(0x1a1e1e, 1);
        bar.fillRect(0, 0, 1280, 100);

        var style1 = { font: "bold 32px Arial", fill: "#fff", boundsAlignH:"center", boundsAlignV: "middle"};
        var text1 = this.add.text(15, 50, "Section 3: Timer Instructions", style1);

        var style2 = { font: "26px Arial", fill: "#da0b0b ", boundsAlignH:"center", boundsAlignV: "middle"};
        var text2 = this.add.text(50, 200, "Timer Instructions:", style2);
        var style3 = { font: "26px Arial", fill: "#000 ", align:"left", wordWrap: {width: 1000, useAdvanceWrap: true}};
        var text3 = this.add.text(150, 265, "Now the game will contain a timer for your decisions", style3)
        var text4 = this.add.text(150, 345, "If no choice is taken within the timer the decision is considered to be a stand", style3)
        var text5 = this.add.text(150, 425, "Other rules remain the same", style3);
        
        var nextButton = this.add.sprite(200, 575, 'nextButton').setInteractive();
        nextButton.displayWidth = 100;
        nextButton.scaleY = nextButton.scaleX;

        nextButton.on('pointerdown', () => {
            this.scene.start("playGame4", { name: this._name, rollno: 2018111006});
        });
    }
}