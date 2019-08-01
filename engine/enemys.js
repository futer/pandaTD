import { enemy } from './engine.js';
import { enemyImg } from '../assets/utils/imgAssets.js';

export default class Enemy {
    constructor(ctx, id) {
        this.ctx = ctx;
        this.speed = 0.3;
        this.startPoint = [20, 20];
        this.position = [20, 20]
        this.endPoint = [20, 700];
        this.id = id;

        this.images = [];
        for (let [key, value] of Object.entries(enemyImg)) {
            let image = new Image(84, 84);
            image.src = value;
            this.images.push(image);
        }
    }

    drawEnemy() {
        this.ctx.fillStyle = '#000000';
        this.ctx.drawImage(this.images[1], this.position[0], this.position[1], 50, 50);
        // this.ctx.fillRect(this.position[0], this.position[1], 100, 100);
    }

    movingEnemy() {
        enemy.forEach((element, index) => {
            if (Math.round(element.position[0]) < 1100 && Math.round(element.position[1]) === 20) {
                element.position[0] += element.speed;
            }
            if (Math.round(element.position[0]) === 1100 && Math.round(element.position[1]) < 300) {
                element.position[1] += element.speed;
            }

            if (Math.round(element.position[0]) >= 200 && Math.round(element.position[1]) === 300) {
                element.position[0] -= element.speed;
            }

            if (Math.round(element.position[0]) === 200 && Math.round(element.position[1]) <= 500 && Math.round(element.position[1]) >= 300) {
                element.position[1] += element.speed;
            }

            if (Math.round(element.position[0]) < 1100 && Math.round(element.position[1]) === 501) {
                element.position[0] += element.speed;
            }

            if (Math.round(element.position[0]) === 1100 && Math.round(element.position[1]) <= 700 && Math.round(element.position[1]) >= 501) {
                element.position[1] += element.speed;
            }

            if (Math.round(element.position[0]) >= 200 && Math.round(element.position[1]) === 700) {
                element.position[0] -= element.speed;
            }
            element.drawEnemy();
        });
    }

}