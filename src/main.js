import { k } from "./kaboomCTX.js";

k.scene("game", () => {

    k.loadSprite("player", "assets/Characters/Basic Charakter Spritesheet.png"
        , {
            sliceX: 4,
            sliceY: 4,
            anims: {
                "idle-down" : { from: 0, to: 1, loop: true},
                "idle-up" : { from: 4, to: 5, loop: true},
                "idle-left" : { from: 8, to: 9, loop: true},
                "idle-right" : { from: 12, to: 13, loop: true},
                "walk-down": { from: 2, to: 3, loop: true},
                "walk-up": { from: 6, to: 7, loop: true},
                "walk-left": { from: 10, to: 11, loop: true},
                "walk-right": { from: 14, to: 15, loop: true},
            },

        });

    const player = k.add([
        k.sprite("player", {anim: "idle-down",animSpeed: 0.3}),
        k.pos(250),
        k.area({scale: 0.3}),
        k.body(),
        "player",
        "friendly",
    ]);

    onKeyDown("up", () => {
        player.move(0, -100);
        if (player.curAnim() !== "walk-up") {
            player.play("walk-up");
        }
        player.play("idle-up");
    });

    onKeyDown("down", () => {
        player.move(0, 100);
        if (player.curAnim() !== "walk-down") {
            player.play("walk-down");
        }
        player.play("idle-down");
    });

    onKeyDown("left", () => {
        player.move(-100, 0);
        if (player.curAnim() !== "walk-left") {
            player.play("walk-left");
        }
    });

    onKeyDown("right", () => {
        player.move(100, 0);
        if (player.curAnim() !== "walk-right") {
            player.play("walk-right");
        }
    });

    k.onKeyPress("f", (c) => {
        k.setFullscreen(!k.isFullscreen());
        console.log("Fullscreen: ");
    });

});


k.go("game"); // Commence la scène "basic"
