class Scene1 extends Phaser.Scene {
    constructor() {
      super("Introduction");
    }
  
    preload(){
      this.load.image("background", "assets/images/background.jpg");
      this.load.image("nextButton", "assets/images/nextButton.png");

      this.load.image("card-space", "assets/images/Cards/cardBack_green1.png");
      this.load.image("card-back", "assets/images/Cards/cardBack_red5.png");
      this.load.image("card-club-2", "assets/images/Cards/cardClubs2.png");
      this.load.image("card-club-3", "assets/images/Cards/cardClubs3.png");
      this.load.image("card-club-4", "assets/images/Cards/cardClubs4.png");
      this.load.image("card-club-5", "assets/images/Cards/cardClubs5.png");
      this.load.image("card-club-6", "assets/images/Cards/cardClubs6.png");
      this.load.image("card-club-7", "assets/images/Cards/cardClubs7.png");
      this.load.image("card-club-8", "assets/images/Cards/cardClubs8.png");
      this.load.image("card-club-9", "assets/images/Cards/cardClubs9.png");
      this.load.image("card-club-10", "assets/images/Cards/cardClubs10.png");
      this.load.image("card-club-A", "assets/images/Cards/cardClubsA.png");
      this.load.image("card-club-J", "assets/images/Cards/cardClubsJ.png");
      this.load.image("card-club-Q", "assets/images/Cards/cardClubsQ.png");
      this.load.image("card-club-K", "assets/images/Cards/cardClubsK.png");
      this.load.image("card-heart-2", "assets/images/Cards/cardHearts2.png");
      this.load.image("card-heart-3", "assets/images/Cards/cardHearts3.png");
      this.load.image("card-heart-4", "assets/images/Cards/cardHearts4.png");
      this.load.image("card-heart-5", "assets/images/Cards/cardHearts5.png");
      this.load.image("card-heart-6", "assets/images/Cards/cardHearts6.png");
      this.load.image("card-heart-7", "assets/images/Cards/cardHearts7.png");
      this.load.image("card-heart-8", "assets/images/Cards/cardHearts8.png");
      this.load.image("card-heart-9", "assets/images/Cards/cardHearts9.png");
      this.load.image("card-heart-10", "assets/images/Cards/cardHearts10.png");
      this.load.image("card-heart-A", "assets/images/Cards/cardHeartsA.png");
      this.load.image("card-heart-J", "assets/images/Cards/cardHeartsJ.png");
      this.load.image("card-heart-Q", "assets/images/Cards/cardHeartsQ.png");
      this.load.image("card-heart-K", "assets/images/Cards/cardHeartsK.png");
      this.load.image("card-spade-2", "assets/images/Cards/cardSpades2.png");
      this.load.image("card-spade-3", "assets/images/Cards/cardSpades3.png");
      this.load.image("card-spade-4", "assets/images/Cards/cardSpades4.png");
      this.load.image("card-spade-5", "assets/images/Cards/cardSpades5.png");
      this.load.image("card-spade-6", "assets/images/Cards/cardSpades6.png");
      this.load.image("card-spade-7", "assets/images/Cards/cardSpades7.png");
      this.load.image("card-spade-8", "assets/images/Cards/cardSpades8.png");
      this.load.image("card-spade-9", "assets/images/Cards/cardSpades9.png");
      this.load.image("card-spade-10", "assets/images/Cards/cardSpades10.png");
      this.load.image("card-spade-A", "assets/images/Cards/cardSpadesA.png");
      this.load.image("card-spade-J", "assets/images/Cards/cardSpadesJ.png");
      this.load.image("card-spade-Q", "assets/images/Cards/cardSpadesQ.png");
      this.load.image("card-spade-K", "assets/images/Cards/cardSpadesK.png");
      this.load.image("card-diamond-2", "assets/images/Cards/cardDiamonds2.png");
      this.load.image("card-diamond-3", "assets/images/Cards/cardDiamonds3.png");
      this.load.image("card-diamond-4", "assets/images/Cards/cardDiamonds4.png");
      this.load.image("card-diamond-5", "assets/images/Cards/cardDiamonds5.png");
      this.load.image("card-diamond-6", "assets/images/Cards/cardDiamonds6.png");
      this.load.image("card-diamond-7", "assets/images/Cards/cardDiamonds7.png");
      this.load.image("card-diamond-8", "assets/images/Cards/cardDiamonds8.png");
      this.load.image("card-diamond-9", "assets/images/Cards/cardDiamonds9.png");
      this.load.image("card-diamond-10", "assets/images/Cards/cardDiamonds10.png");
      this.load.image("card-diamond-A", "assets/images/Cards/cardDiamondsA.png");
      this.load.image("card-diamond-J", "assets/images/Cards/cardDiamondsJ.png");
      this.load.image("card-diamond-Q", "assets/images/Cards/cardDiamondsQ.png");
      this.load.image("card-diamond-K", "assets/images/Cards/cardDiamondsK.png");

      this.load.image("yesButton", "assets/images/yesButton.jpg");
      this.load.image("noButton", "assets/images/noButton.jpg");
      
      this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");
      this.load.html('nameform', 'assets/text/loginform.html');
    }
  
    create() {
      var cam = this.cameras.add(0,0,1280,720);
      cam.setBackgroundColor(0xffffff);

      var bar = this.add.graphics();
      // console.log(bar);
      bar.fillStyle(0x1a1e1e, 1);
      bar.fillRect(0, 0, 1280, 100);

      var style1 = { font: "bold 32px Arial", fill: "#fff", boundsAlignH:"center", boundsAlignV: "middle"};
      var text1 = this.add.text(15, 50, "Section 1: Introduction", style1);

      var style2 = { font: "26px Arial", fill: "#da0b0b ", boundsAlignH:"center", boundsAlignV: "middle"};
      var text2 = this.add.text(50, 200, "About the experiment:", style2);
      var style3 = { font: "26px Arial", fill: "#000 ", align:"left", wordWrap: {width: 1000, useAdvanceWrap: true}};
      var text3 = this.add.text(150, 265, "The aim of the experiment is to find how the risk taking nature in people is affected when they are put under a time-induced stress.", style3)
      var text4 = this.add.text(150, 380, "The experiment is set of games and your final score will be shown along with the avg score of people in the experiment", style3)
      
      var nextButton = this.add.sprite(200, 480, 'nextButton').setInteractive();
      nextButton.displayWidth = 100;
      nextButton.scaleY = nextButton.scaleX;
      nextButton.on('pointerdown', () => {
        this.scene.start("Instructions", { name: this._name, rollno: 2018111006});
      });
    }
    update() {}
}

class FormUtil {
  constructor(config) {
      //super();
      this.scene = config.scene;
      //get the game height and width
      this.gameWidth = this.scene.game.config.width;
      this.gameHeight = this.scene.game.config.height;
  }
  scaleToGameW(elName, per) {
      var el = document.getElementById(elName);
      var w = this.gameWidth * per;
      el.style.width = w + "px";
  }
  scaleToGameH(elName, per) {
      var el = document.getElementById(elName);
      var h = this.gameHeight * per;
      el.style.height = h + "px";
  }
  //changes 100px to 100
  toNum(s) {
      s = s.replace("px", "");
      s = parseInt(s);
      return s;
  }
  //add a change callback
  addChangeCallback(elName, fun, scope = null) {
      var el = document.getElementById(elName);
      if (scope == null) {
          el.onchange = fun;
      } else {
          el.onchange = fun.bind(scope);
      }
  }
  getTextAreaValue(elName) {
      var el = document.getElementById(elName);
      return el.value;
  }
  getTextValue(elName) {
      var el = document.getElementById(elName);
      return el.innerText;
  }
}
  