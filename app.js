var originalImage = null;
var grayImage = null;
var redImage = null;
var yellowImage = null;
var windowImage = null;
var rainbowImage = null;
var colorImage = null;
var userColorChoice = null;
var x = null;
var y = null;
var width = null;
var height = null;
var average = null;
var canvas = null;

//All filters has it own image
//SimpleImage class from Duke University script
function loadImage() {
    var imageInput = document.getElementById("finput");
    originalImage = new SimpleImage(imageInput);
    grayImage = new SimpleImage(imageInput);
    redImage = new SimpleImage(imageInput);
    yellowImage = new SimpleImage(imageInput);
    windowImage = new SimpleImage(imageInput);
    rainbowImage = new SimpleImage(imageInput);
    colorImage = new SimpleImage(imageInput);

    canvas = document.getElementById("canvas");
    originalImage.drawTo(canvas);
}

//Check if image isn't null and have been loaded
function imageIsLoaded(simpleImage) {           
    if (simpleImage == null && !simpleImage.complete()) {
        alert("Image is not loaded.");
        return false;
    } else {
        return true;
    }
}

//Button event, load check, apply filter, show on canvas
function doGray() {
    if (imageIsLoaded(grayImage)) {
        filterGray();
        grayImage.drawTo(canvas);
    }
}

//Standart filter
function filterGray() {
    for (var pixel of grayImage.values()) {
        average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(average);
        pixel.setGreen(average);
        pixel.setBlue(average);
    }
}

//Button event, load check, apply filter, show on canvas
function doRed() {
    if (imageIsLoaded(redImage)) {
        filterRed();
        redImage.drawTo(canvas);
    }
}

//Standart filter
function filterRed() {
    for (var pixel of redImage.values()) {
        average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

        if (average < 128) {
            pixel.setRed(average * 2);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen((average * 2) - 255);
            pixel.setBlue((average * 2) - 255);
        }
    }
}

//Button event, load check, apply filter, show on canvas
function doYellow() {
    if (imageIsLoaded(yellowImage)) {
        filterYellow();
        yellowImage.drawTo(canvas);
    }
}

//Standart filter
function filterYellow() {
    for (var pixel of yellowImage.values()) {
        average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

        if (average < 128) {
            pixel.setRed(average * 2);
            pixel.setGreen(average * 2);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue((average * 2) - 255);
        }
    }
}

//Button event, load check, apply filter, show on canvas
function doWindow() {
    if (imageIsLoaded(windowImage)) {
        filterWindow();
        windowImage.drawTo(canvas);
    }
}

//Standart filter
function filterWindow() {
    for (var pixel of windowImage.values()) {
        x = pixel.getX();
        y = pixel.getY();
        height = windowImage.getHeight();
        width = windowImage.getWidth();

        if (y <= 40 || y >= height - 40) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        if (x <= 40 || x >= width - 40) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        if (x >= (width / 2) - 20 && x <= (width / 2) + 20) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        if (x >= (width / 4) - 20 && x <= (width / 4) + 20) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        if (x >= ((width * 3) / 4) - 20 && x <= ((width * 3) / 4) + 20) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        if (y >= (height / 2) - 20 && y <= (height / 2) + 20) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
    }
}

//Button event, load check, apply filter, show on canvas
function doRainbow() {
    if (imageIsLoaded(rainbowImage)) {
        filterRainbow();
        rainbowImage.drawTo(canvas);
    }
}

//Standart filter
function filterRainbow() {
    for (var pixel of rainbowImage.values()) {
        y = pixel.getY();
        height = rainbowImage.getHeight();
        average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

        if (y <= (height / 7)) {   //red stripe
            if (average < 128) {
                pixel.setRed(average * 2);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen((average * 2) - 255);
                pixel.setBlue((average * 2) - 255);
            }
        } else if (y <= (height / 7) * 2) {   //orange stripe
            if (average < 128) {
                pixel.setRed(average * 2);
                pixel.setGreen(average * 0.8);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen((average * 1.2) - 51);
                pixel.setBlue((average * 2) - 255);
            }
        } else if (y <= (height / 7) * 3) {   //yellow stripe
            if (average < 128) {
                pixel.setRed(average * 2);
                pixel.setGreen(average * 2);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue((average * 2) - 255);
            }
        } else if (y <= (height / 7) * 4) {   //green stripe
            if (average < 128) {
                pixel.setRed(0);
                pixel.setGreen(average * 2);
                pixel.setBlue(0);
            } else {
                pixel.setRed((average * 2) - 255);
                pixel.setGreen(255);
                pixel.setBlue((average * 2) - 255);
            }
        } else if (y <= (height / 7) * 5) {   //blue stripe
            if (average < 128) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(average * 2);
            } else {
                pixel.setRed((average * 2) - 255);
                pixel.setGreen((average * 2) - 255);
                pixel.setBlue(255);
            }
        } else if (y <= (height / 7) * 6) {   //indigo stripe
            if (average < 128) {
                pixel.setRed(average * 0.8);
                pixel.setGreen(0);
                pixel.setBlue(average * 2);
            } else {
                pixel.setRed((average * 1.2) - 51);
                pixel.setGreen((average * 2) - 255);
                pixel.setBlue(255);
            }
        } else {   //violet stripe
            if (average < 128) {
                pixel.setRed(average * 1.6);
                pixel.setGreen(0);
                pixel.setBlue(average * 1.6);
            } else {
                pixel.setRed((average * 0.4) + 153);
                pixel.setGreen((average * 2) - 255);
                pixel.setBlue((average * 0.4) + 153);
            }
        }
    }
}

//Button event, set color, load check, apply filter, show on canvas
function doColorFilter(newColor) {   
    userColorChoice = newColor;                         //get color from input
    colorImage = new SimpleImage(originalImage);        //reset image to not filter an image already filtered
    if (imageIsLoaded(colorImage)) {                    //not null
        filterColor();                                  //apply filter
        colorImage.drawTo(canvas);                      //show image
    }
}

//Personalized color filter
function filterColor() {
    var red = parseInt(userColorChoice.substr(1,2), 16);        //Get integer RGB values from string
    var green = parseInt(userColorChoice.substr(3,2), 16);
    var blue = parseInt(userColorChoice.substr(5,2), 16);

    for (var pixel of colorImage.values()) {
        average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

        if (average < 128) {
            pixel.setRed(red / 127.5 * average);
            pixel.setGreen(green / 127.5 * average);
            pixel.setBlue(blue / 127.5 * average);
        } else {
            pixel.setRed((2 - red / 127.5) * average + 2 * red - 255);
            pixel.setGreen((2 - green / 127.5) * average + 2 * green - 255);
            pixel.setBlue((2 - blue / 127.5) * average + 2 * blue - 255);
        }
    }
}

//Button event, reset images to image loaded
function resetImage() {
    if (imageIsLoaded(originalImage)) {
        originalImage.drawTo(canvas);
        grayImage = new SimpleImage(originalImage);
        redImage = new SimpleImage(originalImage);
        yellowImage = new SimpleImage(originalImage);
        windowImage = new SimpleImage(originalImage);
        rainbowImage = new SimpleImage(originalImage);
        colorImage = new SimpleImage(originalImage);
    }
}