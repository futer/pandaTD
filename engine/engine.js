import Enemy from './enemys.js';

export let numberOfEnemy = 5;
export let enemy = [];

export default class Engine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.windowWidth = width;
        this.windowHeight = height;
        this.lastTicks = 0;
        this.enemyTimer = 0.0;
        window.requestAnimationFrame(ticks => this.update(ticks));
    }

    update(ticks) {
        const delta = (ticks - this.lastTicks) * 0.0001;
        this.lastTicks = ticks;
        this.enemyTimer += delta;

        if (this.enemyTimer > 1.0) {

            if (enemy.length <= numberOfEnemy) {
                enemy.push(new Enemy(this.ctx, enemy.length));
            }
            this.enemyTimer = 0
        }

        this.ctx.fillRect(0, 0, this.windowWidth, this.windowHeight);
        enemy.forEach((element) => {
            element.movingEnemy();
        })
        window.requestAnimationFrame(this.update.bind(this));
    }
}





//window.requestAnimationFrame(this.update.bind(this));
