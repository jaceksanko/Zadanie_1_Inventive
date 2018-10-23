const img = new Image();
img.src = "../images/clouds-high-lake-1118866.jpg";
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

function pick(x, y) {
    const pixel = ctx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    return [data[0], data[1], data[2]];
}

let arraysRgb = [];

function getRgbPick() {
    for (let j = 1; j < img.height; j++) {
        for (let i = j; i < img.width; i++) {
            let getRgbPixel = pick(i, j);
            arraysRgb.push(getRgbPixel);
        }
    }
}

function getSum(total, num) {
    return total + num;
}

function rgbSum(number) {
    return (
        arraysRgb.map(arrayRgb => arrayRgb[number]).reduce(getSum) /
        arraysRgb.length
    );
}

img.onload = () => {
    document.body.appendChild(img);
    ctx.drawImage(img, 0, 0);
    getRgbPick();

    let sumRed = rgbSum(0).toFixed(2);
    let sumGreen = rgbSum(1).toFixed(2);
    let sumBlue = rgbSum(2).toFixed(2);

    console.log(`
    The average of red channels from pixels: ${sumRed}
    The average of green channels from pixels: ${sumGreen}
    The average of blue channels from pixels: ${sumBlue}`);
};
