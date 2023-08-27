# Neuroevolution-Dino-Game
## _Link to the program_
[p5.js web editor]

## _Functioning_
Similar to Google's [Dinosaur Game], there are some static objects (called players)
that are only allowed to jump and jumping is controlled by neuroevolution algorithm.
Players come in waves, called generations, and each wave is created when all players perish.
Players try to avoid oncoming obstacle, which moves at varying speed
and has varying height. If player touches obstacle, then it perishes
and its score is send to the algorithm to evaluate. Score is calculated
based on amount of frames counted before touching the obstacle.

## _Purpose_
This program was designed to show how machine learning (neuroevolution algorithm to be precise),
can be used in a practical and graphical setting. It tries to show that how succesful network is,
depends partially on randomness, and that two networks can have very different results even when using
the exact same algorithm.


[//]: #
   [p5.js web editor]: <https://editor.p5js.org/Ozpl/sketches/Prj1n77Kq>
   [Dinosaur Game]: <https://en.wikipedia.org/wiki/Dinosaur_Game>
