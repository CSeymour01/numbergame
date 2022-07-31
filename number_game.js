 // Create a variable called number
  var number;
  // Create a variable for the y-position
  var numberYPosition = 200;

  function startGame() {
    gameCanvas.start();
    // Create our new number using our function
    number = new createNumber(50, 50, 300);
  }
  
  // Create a function called createNumber
  function createNumber(width, height, x) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = numberYPosition;
  
    ctx = gameCanvas.context;
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
