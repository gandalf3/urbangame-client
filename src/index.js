import Phaser from "phaser";
import logoImg from "./assets/logo.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}

let button = document.getElementById('thebutton');
button.addEventListener("click", function() {
  postMessage({'click': true})
  .then(data => console.log(data))
  .catch(error => console.error(error));
});

function postMessage(msg = {}) {
  console.log(msg);
  return fetch('127.0.0.1:8000', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: msg,
  });
  // .then(response => response.json());
}
