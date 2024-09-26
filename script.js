document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");

  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  //0 - pacdots
  //1 - wall
  //2 - ghost-lair
  //3 - power-pellet
  //4 - empty

  const sqaures = [];

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const sqaure = document.createElement("div");
      sqaure.id = i;
      grid.appendChild(sqaure);
      sqaures.push(sqaure);

      if (layout[i] === 0) {
        sqaures[i].classList.add("pac-dot");
      }
      if (layout[i] === 1) {
        sqaures[i].classList.add("wall");
      }
      if (layout[i] === 2) {
        sqaures[i].classList.add("ghost-lair");
      }
      if (layout[i] === 3) {
        sqaures[i].classList.add("power-pellet");
      }
    }
  }

  createBoard();

  let pacmanCurrentIndex = 490;
  sqaures[pacmanCurrentIndex].classList.add("pac-man");

  function movePacman(e) {
    sqaures[pacmanCurrentIndex].classList.remove("pac-man");
    switch (e.key) {
      case "ArrowLeft":
        if (
          pacmanCurrentIndex % width !== 0 &&
          !sqaures[pacmanCurrentIndex - 1].classList.contains("wall") &&
          !sqaures[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        ) {
          pacmanCurrentIndex -= 1;
        }

        if (sqaures[pacmanCurrentIndex - 1] === sqaures[363]) {
          pacmanCurrentIndex = 391;
        }

        break;

      case "ArrowRight":
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !sqaures[pacmanCurrentIndex + 1].classList.contains("wall") &&
          !sqaures[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        ) {
          pacmanCurrentIndex += 1;
        }
        if (sqaures[pacmanCurrentIndex + 1] === sqaures[392]) {
          pacmanCurrentIndex = 364;
        }

        break;

      case "ArrowUp":
        if (
          pacmanCurrentIndex - width >= 0 &&
          !sqaures[pacmanCurrentIndex - width].classList.contains("wall") &&
          !sqaures[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        ) {
          pacmanCurrentIndex -= width;
        }
        break;
      case "ArrowDown":
        if (
          pacmanCurrentIndex + width < width * width &&
          !sqaures[pacmanCurrentIndex + width].classList.contains("wall") &&
          !sqaures[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        ) {
          pacmanCurrentIndex += width;
        }
        break;
    }
    sqaures[pacmanCurrentIndex].classList.add("pac-man");
    pacDotEaten();
    powerPelletEaten();
  }
  document.addEventListener("keyup", movePacman);

  function pacDotEaten() {
    if (sqaures[pacmanCurrentIndex].classList.contains("pac-dot")) {
      score++;
      scoreDisplay.innerHTML = score;
      sqaures[pacmanCurrentIndex].classList.remove("pac-dot");
    }
  }

  function powerPelletEaten() {
    if (sqaures[pacmanCurrentIndex].classList.contains("power-pellet")) {
      score += 10;
      scoreDisplay.innerHTML = score;
      sqaures[pacmanCurrentIndex].classList.remove("power-pellet");
    }
  }

  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.isScared = false;
      this.timerId = NaN;
    }
  }

  ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("pinky", 376, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 348, 500),
  ];

  // prettier-ignore
  ghosts.forEach(ghost => {
    sqaures[ghost.currentIndex].classList.add(ghost.className)
    sqaures[ghost.currentIndex].classList.add("ghost")
  })

  // prettier-ignore
  ghosts.forEach(ghost => moveGhost(ghost));

  function moveGhost(ghost) {
    const directions = [-1, 1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function () {
      if (
        !sqaures[ghost.currentIndex + direction].classList.contains("ghost") &&
        !sqaures[ghost.currentIndex + direction].classList.contains("wall")
      ) {
        sqaures[ghost.currentIndex].classList.remove(ghost.className, "ghost");
        ghost.currentIndex += direction;
        sqaures[ghost.currentIndex].classList.add(ghost.className, "ghost");
      } else direction = directions[Math.floor(Math.random() * directions.length)];
    }, ghost.speed);
  }
});
