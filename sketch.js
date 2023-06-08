/*
Piotr Zakrzewski @Ozpl, 2023

A simple demo designed to show how to use machine learning
(neuroevolution) in a practical setting - in this case, how to
train network to jump above randomly moving obstacles (similar
concept as in Dino Game developed by Google)

Neuroevolution.js file made by Vincent Bazia, source can be found at:
https://github.com/xviniette/FlappyLearning

Flappy Bird machine learning demo made by him:
https://xviniette.github.io/FlappyLearning/
*/

let generation = 1
let population = 50
let leftAlive = population

let score = 0
let highScore = 0

let groundY = 370
  
function setup() {
  createCanvas(900, 400)
  
  players = spawnNewPlayers(population)
  ground = new Ground(groundY)
  obstacle = new Obstacle(groundY)
  
  neuroevolution = new Neuroevolution()
  nextGeneration = neuroevolution.nextGeneration()
  
  generationText = select('#generation')
  leftAliveText = select('#left-alive')
  scoreText = select('#score')
  highScoreText = select('#high-score')
}

function draw() {
  //frameRate(144)
  background(80)
  
  ground.show()
  obstacle.show()
  obstacle.update()
  
  generationText.html("Generation: " + generation)
  leftAliveText.html("Left alive: " + leftAlive)
  scoreText.html("Score: " + score)
  
  for (let i = 0; i < players.length; i++) {
    if (players[i].alive) {
      let inputs = [
        players[i].x,
        obstacle.x,
        obstacle.h,
        obstacle.speed
      ]
      
      if (!players[i].isJumping) {
        let result = nextGeneration[i].compute(inputs)
        if(result > 0.5){
            players[i].jump()
        }
      }
      
      players[i].show()
      players[i].update(obstacle)
    }
    
    if (!players[i].alive && !players[i].scoreSubmitted) {
      neuroevolution.networkScore(nextGeneration[i], score)
      players[i].scoreSubmitted = true
      leftAlive--
    }
  }
  
  //leftAlive = players.filter(player => player.alive).length
  if (!leftAlive) {
    if (score > highScore) {
      highScore = score
      highScoreText.html("High score: " + highScore + " (Generation " + generation + ")")
    }
    score = 0
    
    generation++
    nextGeneration = neuroevolution.nextGeneration()
    leftAlive = population
    
    players = spawnNewPlayers(population)
    obstacle.x = obstacle.w + width
  }
  else {
    score++
  }
}

function spawnNewPlayers(length) {
  players = []
  for (let i = 0; i < length; i++) {
    players.push(new Player(groundY))
  }
  return players
}