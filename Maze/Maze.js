/* eslint-disable require-yield, eqeqeq */

import {
    Sprite,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Maze extends Sprite {
    constructor(...args) {
        super(...args);

        this.costumes = [
            new Costume("Level 1", "./Maze/costumes/Level 1.svg", {
                x: 249,
                y: 189.39998000000003
            }),
            new Costume("Level 2", "./Maze/costumes/Level 2.svg", { x: 249, y: 189 }),
            new Costume("Level 3", "./Maze/costumes/Level 3.svg", { x: 249, y: 189 }),
            new Costume("Level 4", "./Maze/costumes/Level 4.svg", { x: 249, y: 189 }),
            new Costume("Level 5", "./Maze/costumes/Level 5.svg", { x: 249, y: 189 })
        ];

        this.sounds = [];

        this.triggers = [
            new Trigger(
                Trigger.BROADCAST,
                { name: "New Level" },
                this.whenIReceiveNewLevel
            ),
            new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
        ];
    }

    *whenIReceiveNewLevel() {
        if (this.stage.vars.level == 6) {
            this.broadcast("You Win");
        } else {
            this.costumeNumber += 1;
        }
    }

    *whenGreenFlagClicked() {
        this.costume = "Level 1";
    }
}
