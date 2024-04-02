/* eslint-disable require-yield, eqeqeq */

import {
    Stage as StageBase,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
    constructor(...args) {
        super(...args);

        this.costumes = [
            new Costume("Background", "./Stage/costumes/Background.svg", {
                x: 244.39999389648438,
                y: 188.39999389648438
            })
        ];

        this.sounds = [
            new Sound(
                "Innocence by ROA [edited]",
                "./Stage/sounds/Innocence by ROA [edited].mp3"
            )
        ];

        this.triggers = [
            new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
        ];

        this.vars.level = 2;
    }

    *whenGreenFlagClicked() {
        while (true) {
            yield* this.playSoundUntilDone("Innocence by ROA [edited]");
            yield;
        }
    }
}
