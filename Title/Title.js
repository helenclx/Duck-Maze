/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Title extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Title/costumes/costume1.svg", {
        x: 255.399995,
        y: 180
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = true;
    this.moveAhead();
    yield* this.wait(1);
    this.y += 1;
    for (let i = 0; i < 10; i++) {
      this.y += this.y;
      yield;
    }
    this.visible = false;
  }
}
