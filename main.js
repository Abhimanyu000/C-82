MYCANVAS=document.getElementById("myCanvas");

ctx=MYCANVAS.getContext("2d");

MouseEvent="";

color="magenta";

width=2;

var lastpositionx,lastpositiony;

MYCANVAS.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    color=document.getElementById("inputtochangecolorofdrawingincanvasofclass82classactivity").value;
    MouseEvent="mousedown";
};

MYCANVAS.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    MouseEvent="mouseup";
};

MYCANVAS.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    MouseEvent="mouseleave";
};

MYCANVAS.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    mousex=e.clientX-MYCANVAS.offsetLeft;
    mousey=e.clientY-MYCANVAS.offsetTop;
    if(MouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("Last position of X and Y co-ords are ");
        console.log("X = "+lastpositionx+", Y = "+lastpositiony);
        ctx.moveTo(lastpositionx, lastpositiony);

        console.log("Current position of X and Y co-ords are ");
        console.log("X = "+mousex+", Y = "+mousey);

        ctx.lineTo(mousex, mousey);
        ctx.stroke();
    }

    lastpositionx=mousex;
    lastpositiony=mousey;
}

function clearalldrawingsfromthecanvasinclass82classactivity() {
    ctx.clearRect(0, 0, MYCANVAS.width, MYCANVAS.height);
}