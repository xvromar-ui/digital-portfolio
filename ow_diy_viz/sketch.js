let table;
let heroStats = {};
let heroImages = {};

let metrics = [
  { key: "damage", label: "DMG", scale: 0.025 },
  { key: "healing", label: "HEAL", scale: 0.006 },
  { key: "kd", label: "K/D", scale: 18 }
];

let colors = [
  [9, 153, 136],
  [230, 18, 103],
  [91, 16, 176]
];

let heroes = ["Mizuki", "Kiriko", "Juno"];

function preload() {
  // load data and images
  table = loadTable("ow_data_support.csv", "csv", "header");

  heroImages["Mizuki"] = loadImage("https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/36/Icon-Mizuki.png/revision/latest/scale-to-width-down/65?cb=20260210211030");
  heroImages["Kiriko"] = loadImage("https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ca/Icon-kiriko.png/revision/latest/scale-to-width-down/65?cb=20221004202610");
  heroImages["Juno"] = loadImage("https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c7/Icon-Juno.png/revision/latest/scale-to-width-down/65?cb=20240822214309");
}

function setup() {
  createCanvas(1000, 550);

  let grouped = {};

  // group matches by hero
  for (let i = 0; i < table.getRowCount(); i++) {
    let hero = table.getString(i, "heroe");

    if (!grouped[hero]) {
      grouped[hero] = [];
    }

    let elims = table.getNum(i, "eliminations");
    let deaths = table.getNum(i, "deaths");

    grouped[hero].push({
      damage: table.getNum(i, "damage"),
      healing: table.getNum(i, "healing"),
      kd: elims / max(deaths, 1)
    });
  }

  // calculate averages
  for (let hero in grouped) {
    heroStats[hero] = {};

    for (let j = 0; j < metrics.length; j++) {
      let sum = 0;

      for (let k = 0; k < grouped[hero].length; k++) {
        sum += grouped[hero][k][metrics[j].key];
      }

      heroStats[hero][metrics[j].key] = sum / grouped[hero].length;
    }
  }
}

function draw() {
  background(18, 28, 43);

  // title
  fill(255);
  textAlign(CENTER);
  textSize(26);
  text("Average Stats from 10 Matches per Support Hero", width / 2, 40);

  fill(180);
  textSize(12);
  text("Hover over a circle to see the average stat", width / 2, 65);

  // draw each hero
  for (let i = 0; i < heroes.length; i++) {
    drawHero(heroes[i], 180 + i * 320, 300, colors[i]);
  }
}

function drawHero(hero, x, y, color) {
  // hero image
  imageMode(CENTER);
  if (heroImages[hero]) {
    image(heroImages[hero], x, y - 140, 60, 60);
  }

  // hero name
  fill(255);
  textSize(18);
  textAlign(CENTER);
  text(hero, x, y - 90);

  // draw stat circles
  for (let i = 0; i < metrics.length; i++) {
    let value = heroStats[hero][metrics[i].key];
    let size = value * metrics[i].scale;

    let cx = x + (i - 1) * 90;

    drawCircle(cx, y, size, metrics[i].label, value, color);
  }
}

function drawCircle(x, y, size, label, value, color) {
  let d = dist(mouseX, mouseY, x, y);

  // hover effect
  if (d < size / 2) {
  let r = color[0] * 0.6;
  let g = color[1] * 0.6;
  let b = color[2] * 0.6;

  fill(color[0], color[1], color[2], 220);
  stroke(r, g, b);
  strokeWeight(10);
} else {
  fill(color[0], color[1], color[2], 180);
  noStroke();
}

  ellipse(x, y, size);

  // label
  fill(255);
  noStroke();
  textSize(13);
  textAlign(CENTER);
  text(label, x, y + size / 2 + 18);

  // tooltip
  if (d < size / 2) {
    let tx = mouseX + 10;
    let ty = mouseY - 50;

    fill(30);
    stroke(color[0], color[1], color[2]);
    strokeWeight(2);
    rect(tx, ty, 120, 25);
    
    noStroke();

    fill(255);
    textAlign(LEFT);
    text(label + ": " + value.toFixed(1), tx + 5, ty + 17);
  }
}