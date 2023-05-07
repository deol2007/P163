/* This code is registering a new A-Frame component called "player-movement". When this component is
initialized, it calls the "walk" function which adds an event listener to the window for keydown
events. If the key pressed is one of the arrow keys (up, right, left, or down), it selects an entity
with the ID "sound2" and plays its sound component. This code is likely used to add sound effects to
player movement in a virtual reality or 3D environment. */
AFRAME.registerComponent("player-movement", {
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowDown"
      ) {
        var entity = document.querySelector("#sound2");
        entity.components.sound.playSound();
      }
    });
  },
});

