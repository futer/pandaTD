import Enemy from './enemys.js';

export let numberOfEnemy = 15;
export let enemy = [];

export default class Engine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.windowWidth = width;
        this.windowHeight = height;
        for (let i = 0; i < numberOfEnemy; i++) {
            enemy.push(new Enemy(this.ctx, enemy.length));
        }
        window.requestAnimationFrame(this.update.bind(this));
    }

    update() {
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillRect(0, 0, this.windowWidth, this.windowHeight);
        enemy.forEach((element)=> {
            element.movingEnemy();
        })
        window.requestAnimationFrame(this.update.bind(this));
    }
}





//window.requestAnimationFrame(this.update.bind(this));
