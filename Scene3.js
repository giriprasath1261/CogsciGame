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
    this.curIndex = 0;
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

    var cardspace = this.add.sprite(140,450, 'card-space');
    cards = this.add.group();

    var tempcard = this.add.sprite(config.width * 0.5, 200, 'card-back');
    tempcard.depth = depthvar;
    depthvar-=1;

    this.draw = this.add.bitmapText(50, 575, "pixelFont", "Draw Card:", 28);

    var yesButton  = this.add.sprite(100, 650, 'yesButton').setInteractive();
    var noButton = this.add.sprite(200, 650, 'noButton').setInteractive();
    noButton.alpha = 0.5;  

    cards.add(tempcard);
    cards.children.each(function(card) {card.setInteractive()},);

    yesButton.on('pointerdown', () => {
      var index = [];
      index.push(7);
      index.push(15);
      index.push(30);
      index.push(9);
      if(this.curIndex>=2) {
        noButton.alpha = 1;
        noButton.setInteractive();
        noButton.on('pointerdown', ()=> {
          alert("The opponent scores 19 you Lose :'( \n move to next round");
          this.scene.start("playGame2");
        })
        // const alertHTML = '<div class="alert">ALERT!!!</div>';
        // document.body.insertAdjacentHTML('beforeend', alertHTML);
        // setTimeout(() => document.querySelector('.alert').classList.add('hide'), 3000);
      }
      var nextcard = arr[index[this.curIndex]];
      // console.log(nextcard);
      // console.log(index);
      var nextvalue = valuearr[index[this.curIndex]];
      this.curIndex+=1;
      this.score+=nextvalue;
      this.ScoreGot.text = "Score:  " + this.score.toString();
      this.flip(tempcard,offsetx,nextcard,this.score);
      var tempcard2 = this.add.sprite(config.width * 0.5, 200, 'card-back').setInteractive();
      tempcard2.depth = depthvar;
      depthvar-=1;
      offsetx += 40;
      tempcard = tempcard2;
      if(this.score>=21) {
        alert("you exceeded 21 you lose :'( \n move to next round");
        this.scene.start("playGame2");
      }
    });
    // cards.children.each(function(card) {card.on('pointerdown', () => function(pointer) {this.flip(card);}); }, this);
  }

  flip(card,offsetx,nextcard,score){
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
      y: 450,
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
