var canvas = new fabric.Canvas("myCanvas");
var heroWidth = 30;
var heroHeight = 30;
var hero1 = "";
var hero2 = "";

function heroImage() {
    fabric.Image.fromURL("mBBQzTW.jpg", function (Img) {
        hero1 = Img;
        hero1.scaleToWidth(150);
        hero1.scaleToHeight(140);
        hero1.set({
        });
        canvas.add(hero1);
    });
}

function keydownFn(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=="80"){
        console.log("shift&p Pressed together")
        heroWidth=blockWidth+10;
    heroHeight=blockHeight+10;
        document.getElementById("currentWidth").innerHTML=heroWidth;
        document.getElementById("currentHeight").innerHTML=heroHeight;
    }
    if(e.shiftKey==true&&keyPressed=="77"){
        console.log("shift&p Pressed together")
        heroWidth=blockWidth-10;
        heroHeight=blockHeight-10;
        document.getElementById("currentWidth").innerHTML=heroWidth;
    document.getElementById("currentHeight").innerHTML=heroHeight;
    }


if (keyPressed == "65") {
    console.log("a")
    heroImage("captin_america_left_hand.png")
}

if (keyPressed == "66") {
    console.log("b")
    heroImage("hulk_face.png")
}

if (keyPressed == "67") {
    console.log("c")
    heroImage("hulk_left_hand.png")
}

if (keyPressed == "68") {
    console.log("d")
    heroImage("hulk_legs.png")
}


if (keyPressed == "69") {
    console.log("e")
    heroImage("hulked_body.png")
}

if (keyPressed == "70") {
    console.log("f")
heroImage("ironman_face.png")
}

if (keyPressed == "71") {
    console.log("g")
    heroImage("ironman_left_hand.png")
}

if (keyPressed == "72") {
    console.log("h")
    heroImage("ironman_right_hand.png")
}

if (keyPressed == "73") {
    console.log("g")
    heroImage("ironman_legs.png")
}

if (keyPressed == "74") {
    console.log("i")
    heroImage("player.png")
}
if (keyPressed == "75") {
    console.log("j")
    heroImage("spiderman_body.png")
}

if (keyPressed == "76") {
    console.log("k")
    heroImage("spiderman_face.png")
}

if (keyPressed == "77") {
    console.log("l")
    heroImage("spiderman_left_hand.png")
}

if (keyPressed == "78") {
    console.log("m")
    heroImage("spiderman_body.png")
}

if (keyPressed == "79") {
    console.log("n")
    heroImage("spiderman_legs.png")
}

if (keyPressed == "80") {
    console.log("o")
    heroImage("thor_face.png")
}

if (keyPressed == "81") {
    console.log("p")
    heroImage("thor_left_hand.png")
}

if (keyPressed == "82") {
    console.log("q")
    heroImage("thor_right_hand.png")
}
}
