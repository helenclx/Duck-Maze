/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("DuckRight", "./Player/costumes/DuckRight.svg", {
        x: 127.32433512081904,
        y: 127.38027421244317
      }),
      new Costume("DuckLeft", "./Player/costumes/DuckLeft.svg", {
        x: 127.32432975793513,
        y: 127.38027421244317
      })
    ];

    this.sounds = [new Sound("Duck", "./Player/sounds/Duck.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.level = 1;
    yield* this.resetPosition();
    this.costume = "DuckRight";
    while (true) {
      yield* this.keys();
      if (this.touching(Color.rgb(255, 102, 102))) {
        yield* this.resetPosition();
      }
      yield* this.reachGoal();
      yield;
    }
  }

  *movementXOrY(speed, xY) {
    if (xY == "x") {
      if (!this.touching(Color.rgb(255, 212, 101))) {
        this.x += speed;
      }
      if (this.touching(Color.rgb(255, 212, 101))) {
        this.x += speed * -1;
      }
    } else {
      if (!this.touching(Color.rgb(255, 212, 101))) {
        this.y += speed;
      }
      if (this.touching(Color.rgb(255, 212, 101))) {
        this.y += speed * -1;
      }
    }
  }

  *resetPosition() {
    if (this.stage.vars.level == 1) {
      this.goto(-195, 135);
    }
    if (this.stage.vars.level == 2) {
      this.goto(-206, -142);
    }
    if (this.stage.vars.level == 3) {
      this.goto(-14, 145);
    }
    if (this.stage.vars.level == 4) {
      this.goto(-208, -14);
    }
    if (this.stage.vars.level == 5) {
      this.goto(-206, 147);
    }
  }

  *keys() {
    if (this.keyPressed("right arrow") || this.keyPressed("d")) {
      this.warp(this.movementXOrY)(5, "x");
      this.costume = "DuckRight";
    }
    if (this.keyPressed("left arrow") || this.keyPressed("a")) {
      this.warp(this.movementXOrY)(-5, "x");
      this.costume = "DuckLeft";
    }
    if (this.keyPressed("up arrow") || this.keyPressed("w")) {
      this.warp(this.movementXOrY)(5, "y");
    }
    if (this.keyPressed("down arrow") || this.keyPressed("s")) {
      this.warp(this.movementXOrY)(-5, "y");
    }
  }

  *reachGoal() {
    if (this.touching(this.sprites["Puddle"].andClones())) {
      yield* this.playSoundUntilDone("Duck");
      this.stage.vars.level += 1;
      this.broadcast("New Level");
      this.warp(this.resetPosition)();
      this.costume = "DuckRight";
    }
  }
}
