import kaboom from "kaboom";

export const k = kaboom({
    global: true,
    scale: 2,
    hashGridSize: 32,
    canvas: document.getElementById("game"),
});
