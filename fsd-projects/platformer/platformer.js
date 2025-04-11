$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid(//);


    // TODO 2 - Create Platforms
    createPlatform(930, 612, 300, 50, "green");
    createPlatform(186, 612, 300, 50, "yellow");
    createPlatform(560, 512, 300, 50, "purple");
    createPlatform(146, 412, 300, 50, "yellow");
    createPlatform(990, 412, 300, 50, "green");

    // TODO 3 - Create Collectables
    createCollectable("steve", 350, 50);
    createCollectable("diamond", 200, 170);
    createCollectable("grace", 350, 50);
    createCollectable("database", 200, 170);
    createCollectable("kennedi", 350, 50);

    
    // TODO 4 - Create Cannons
    createCannon("top", 565, 900);
    createCannon("left", 250, 1900);
    createCannon("top", 965, 900);
    createCannon("bottom", 665, 900);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
