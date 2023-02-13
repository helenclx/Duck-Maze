/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Puddle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "puddle-publicdomainvectors",
        "./Puddle/costumes/puddle-publicdomainvectors.svg",
        { x: 207.162, y: 22.671829667589947 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.level == 1) {
        this.goto(165, -50);
      }
      if (this.stage.vars.level == 2) {
        this.goto(182, -138);
      }
      if (this.stage.vars.level == 3) {
        this.goto(-186, -141);
      }
      if (this.stage.vars.level == 4) {
        this.goto(23, 64);
      }
      if (this.stage.vars.level == 5) {
        this.goto(185, -141);
      }
      yield;
    }
  }
}
