// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.row = 2;
    this.x = -101;
    this.lastTime = 0;
    this.speed = 150;
    this.previousrow = 0;
};
Enemy.prototype.speeds = [];
Enemy.prototype.speeds.push (150);
Enemy.prototype.speeds.push (350);
Enemy.prototype.speeds.push (250);

Enemy.prototype.currentSpeedIndex = 0;
Enemy.prototype.checkCollision = function (player) {
  // Enemy y = -22 + (83 * (row - 1))
  // Player y = -10 + (83 * (row - 1))
  // Row-height: 83
    if ((this.row == player.row) &&
        ((((this.x + 101) >= player.x) && (this.x <= player.x)) ||
        ((this.x >= player.x) && ((this.x - 101) <= player.x)))) {
      player.init();
    };
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.lastTime += dt;
    this.x += (this.speed * dt);
    if (this.x > 505) {
      this.x = -101;
      this.speed = this.speeds [this.currentSpeedIndex];
      this.currentSpeedIndex ++;
      if (this.currentSpeedIndex > 2)
        this.currentSpeedIndex = 0;
    }
    if (this.previousrow != this.row) {
      this.y = -22 + (83 * (this.row - 1));
      this.previousrow = this.row;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
  this.sprites = [
    'images/char-boy.png',
    'images/char-cat-girl.png',
    'images/char-horn-girl.png',
    'images/char-pink-girl.png',
    'images/char-princess-girl.png'
  ];
  this.selectedSprite = 0;
  this.sprite = this.sprites[this.selectedSprite];
  this.playerSelected = false;
  this.init ();
};

Player.prototype.init = function () {
  this.row = 5;
  this.column = 3;
  this.playerSelected = false;
}

Player.prototype.update = function () {
  this.x = (101 * (this.column - 1));
  this.y = (83 * (this.row - 1)) - 10;
}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (direction) {
  switch (direction) {
    case 'left':
      if (this.column > 1) {
        this.column -= 1;
        if (!this.playerSelected) {
          this.playerSelected = true;
        }
      }
      break;
    case 'right':
      if (this.column < 5) {
        this.column += 1;
        if (!this.playerSelected) {
          this.playerSelected = true;
        }
      }
      break;
    case 'up':
      if (this.row > 1) {
        this.row -= 1;
        if (!this.playerSelected) {
          this.playerSelected = true;
        }
        if (1 == this.row) {
          var audio = new Audio("owin31.wav");
          audio.play();
        }
      }
      break;
    case 'down':
      if (this.row < 6) {
        this.row += 1;
        if (!this.playerSelected) {
          this.playerSelected = true;
        }
      }
      break;
    case 'avatar':
      if (!this.playerSelected) {
        if ((++ this.selectedSprite) > 4) {
          this.selectedSprite = 0;
        }
        this.sprite = this.sprites[this.selectedSprite];
      }
      break;
    default:
      break;
  }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
allEnemies.push (new Enemy());
allEnemies.push (new Enemy());
allEnemies.push (new Enemy());
allEnemies[0].speed = 350;
allEnemies[0].row = 3;
allEnemies[2].speed = 250;
allEnemies[2].row = 4;
var player = new Player ();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'avatar'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
