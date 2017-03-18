// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Properties required to track Enemy sprite, sprite location and speed
    this.row = 2;
    this.x = -101;
    this.lastTime = 0;
    this.speed = 150;
    this.previousRow = 0;
};

// Used to generate randomness in newly appeared Enemy sprite speed
// Speed remains constant throughout one run across the canvas
Enemy.prototype.speeds = [];
Enemy.prototype.speeds.push (100);
Enemy.prototype.speeds.push (300);
Enemy.prototype.speeds.push (200);

// Tracks current sprite speed
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

    // Advance by distance which is directly proportional to speed and delta time
    this.x += (this.speed * dt);

    // Reset sprite location as it completes crossing canvas across
    if (this.x > 505) {
        this.x = -101;

        // Use this opportunity to select next random speed
        this.speed = this.speeds [this.currentSpeedIndex];

        // Remember to limit iteration of speed index within bounds
        this.currentSpeedIndex ++;
        if (this.currentSpeedIndex > 2) {
            this.currentSpeedIndex = 0;
        }
    }

    // Only update row if changed
    // We create three objects and later change their rows
    if (this.previousRow != this.row) {
        this.y = -22 + (83 * (this.row - 1));
        this.previousRow = this.row;
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
    // Add required sprites of player avatar
    this.sprites = [
        'images/char-boy.png',
        'images/char-cat-girl.png',
        'images/char-horn-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png'
    ];

    // Default avatar is a boy
    this.selectedSprite = 0;
    this.sprite = this.sprites[this.selectedSprite];

    // Flag to track Player win state
    this.ifWon = false;

    // Initialize Player object state
    this.init ();
};

Player.prototype.init = function () {
    // Initial Player location (1 based row and columns)
    this.row = 5;
    this.column = 3;

    // Have some lock to fix the avatar throughout rest of game play
    // Enable avatar selection
    this.avatarSelected = false;
}

Player.prototype.update = function () {
    // Row and Columns are 1 based count
    // 101 is the tile width and 83 is the height of player
    this.x = (101 * (this.column - 1));
    this.y = (83 * (this.row - 1)) - 10;
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (direction) {
    // Update row / column according to arrow key press
    switch (direction) {
        case 'left':
            if (this.column > 1) {
                this.column -= 1;

                if (!this.avatarSelected) {
                  // Avatar will now remain unchanged for rest of the game.
                  this.avatarSelected = true;
                }
            }
            break;
        case 'right':
            if (this.column < 5) {
                this.column += 1;

                if (!this.avatarSelected) {
                  this.avatarSelected = true;
                }
            }
            break;
        case 'up':
            if (this.row > 1) {
                this.row -= 1;

                if (!this.avatarSelected) {
                    this.avatarSelected = true;
                }

                if (!this.ifWon && (1 == this.row)) {
                    // If player wins, play sound for first win event
                    // Player needs to press F5 to reset the game to startover
                    this.ifWon = true;
                    var audio = new Audio("owin31.wav");
                    audio.play();
                }
            }
            break;
        case 'down':
            if (this.row < 6) {
                this.row += 1;
                if (!this.avatarSelected) {
                    this.avatarSelected = true;
                }
            }
            break;
        case 'avatar':
            // Change avatar if allowed
            if (!this.avatarSelected) {
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

// Create a Global allEnemies array
var allEnemies = [];

// Instantiate three Enemies
allEnemies.push (new Enemy());
allEnemies.push (new Enemy());
allEnemies.push (new Enemy());

// Change Enemy rows and randomize their initial speed
allEnemies[0].speed = 350;
allEnemies[0].row = 3;
allEnemies[2].speed = 250;
allEnemies[2].row = 4;

// Instantiate player
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
