/* eslint-disable require-yield, eqeqeq */

import {
    Sprite,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class YouWin extends Sprite {
    constructor(...args) {
        super(...args);

        this.costumes = [
            new Costume("costume1", "./YouWin/costumes/costume1.svg", {
                x: 256.5,
                y: 74.31152165172226
            })
        ];

        this.sounds = [];

        this.triggers = [
            new Trigger(
                Trigger.BROADCAST,
                { name: "You Win" },
                this.whenIReceiveYouWin
            ),
            new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
        ];
    }

    *whenIReceiveYouWin() {
        this.moveAhead();
        this.visible = true;
        /* TODO: Implement stop all */ null;
    }

    *whenGreenFlagClicked() {
        this.visible = false;
    }
}
