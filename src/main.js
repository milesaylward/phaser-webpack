import Phaser from 'phaser';
import BootScene from './BootScene';

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [
        BootScene,
    ]
};

let game = new Phaser.Game(config);
