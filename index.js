import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Title from "./Title/Title.js";
import Player from "./Player/Player.js";
import Maze from "./Maze/Maze.js";
import Puddle from "./Puddle/Puddle.js";
import YouWin from "./YouWin/YouWin.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
    Title: new Title({
        x: 0,
        y: 345,
        direction: 90,
        costumeNumber: 1,
        size: 100,
        visible: false,
        layerOrder: 5
    }),
    Player: new Player({
        x: -181,
        y: -142,
        direction: 90,
        costumeNumber: 1,
        size: 16,
        visible: true,
        layerOrder: 2
    }),
    Maze: new Maze({
        x: 0,
        y: 0,
        direction: 90,
        costumeNumber: 1,
        size: 100,
        visible: true,
        layerOrder: 1
    }),
    Puddle: new Puddle({
        x: 182,
        y: -138,
        direction: 90,
        costumeNumber: 1,
        size: 20,
        visible: true,
        layerOrder: 3
    }),
    YouWin: new YouWin({
        x: 0,
        y: 0,
        direction: 90,
        costumeNumber: 1,
        size: 100,
        visible: false,
        layerOrder: 4
    })
};

const project = new Project(stage, sprites, {
    frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
