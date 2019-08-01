import Engine from './engine.js';

const body = document.getElementsByTagName('body')[0];
const canvas = document.createElement('canvas');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.className = 'PandaTD';
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

body.appendChild(canvas);

const engine = new Engine(ctx, width, height);
