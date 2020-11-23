class Scene2 extends Phaser.Scene {
    constructor() {
      super("Instructions");
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
        var text1 = this.add.text(15, 50, "Section 2: Instructions", style1);

        var style2 = { font: "26px Arial", fill: "#da0b0b ", boundsAlignH:"center", boundsAlignV: "middle"};
        var text2 = this.add.text(50, 200, "Instructions:", style2);
        var style3 = { font: "26px Arial", fill: "#000 ", align:"left", wordWrap: {width: 1000, useAdvanceWrap: true}};
        var text3 = this.add.text(150, 265, "The rules of the game are similar to the rules of blackjack, you and the computer randomly pick cards and the score should not cross 21", style3)
        var text4 = this.add.text(150, 345, "The score of each card is the number present on it, Jack, Queen and King have 10 points and Ace has 1 point", style3)
        var text5 = this.add.text(150, 425, "If the player has more points than the computer without crossing 21 the player wins", style3);
        var text5 = this.add.text(150, 505, "Total of 6 rounds", style3);
        
        var nextButton = this.add.sprite(200, 575, 'nextButton').setInteractive();
        nextButton.displayWidth = 100;
        nextButton.scaleY = nextButton.scaleX;

        nextButton.on('pointerdown', () => {
            this.scene.start("playGame", { name: this._name, rollno: 2018111006});
        });
    }
}