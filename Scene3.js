class Scene3 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  init(data) {
    this._name = data.name;
    this._rollno = data.rollno;
  }

  create() {
    let arr = [];
    let valuearr = [];
    this.score = 0;
    for(var i = 0;i<4;i++) {
      var house = "spade";
      if (i==1) {
        house = "heart";
      }
      if(i==2) {
        house = "club";
      }
      if(i==3) {
        house = "diamond";
      }
      for(var j=1;j<14;j++) {
        var offset = j.toString();
        var value = j;
        if(j==1) {
          offset = "A";
        }
        if(j==11) {
          offset = "J";
          value = 10;
        }
        if(j==12) {
          offset = "Q";
          value = 10;
        }
        if(j==13) {
          offset = "K";
          value = 10;
        }
        var name = "card-" + house + "-" + offset;
        arr.push(name);
        valuearr.push(value);
      }
    }
    // console.log(arr);
    // console.log(valuearr);
    var cards;
    var depthvar = 100;
    var offsetx = 40;

    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    this.ScoreGot = this.add.bitmapText(10, 20, "pixelFont", "Score:  " + this.score.toString() , 26);

    var cardspace = this.add.sprite(140,550, 'card-space');
    cards = this.add.group();

    var tempcard = this.add.sprite(config.width * 0.5, 200, 'card-back');
    tempcard.depth = depthvar;
    depthvar-=1;

    cards.add(tempcard);
    cards.children.each(function(card) {card.setInteractive()},);

    tempcard.on('pointerdown', () => {
      var index = Math.floor(Math.random() * 52);
      var nextcard = arr[index];
      // console.log(nextcard);
      // console.log(index);
      var nextvalue = valuearr[index];
      this.score+=nextvalue;
      this.ScoreGot.text = "Score:  " + this.score.toString();
      this.flip(tempcard,offsetx,nextcard);
      var tempcard2 = this.add.sprite(config.width * 0.5, 200, 'card-back').setInteractive();
      tempcard2.depth = depthvar;
      depthvar-=1;
      offsetx += 40;
      tempcard = tempcard2;
      this.draw = this.add.bitmapText(10, 650, "pixelFont", "Click above to Draw another card", 30);
    });
    // cards.children.each(function(card) {card.on('pointerdown', () => function(pointer) {this.flip(card);}); }, this);
  }

  flip(card,offsetx,nextcard){
    // console.log(this);
    const timeline = this.tweens.timeline({
      onComplete: () => {
        timeline.destroy();
      }
    });

    timeline.add({
      targets: card,
      scale: 1.1,
      duration: 300
    });

    timeline.add({
      targets: card,
      scaleX: 0,
      duration: 300,
      delay: 200,
      onComplete: () => {
        if(card.texture.key === 'card-back') {
          card.setTexture(nextcard);
        }
        else {
          card.setTexture('card-back');
        }
      }
    });

    timeline.add({
      targets: card,
      scaleX: 1.1,
      duration: 300
    });

    timeline.add({
      targets: card,
      x: 100+offsetx,
      y: 550,
      ease: 'Power1',
      duration: 500
    })

    timeline.add({
      targets: card,
      scale: 1,
      duration: 300
    });

    timeline.play();
  }

  // update() { 
  // }

}
