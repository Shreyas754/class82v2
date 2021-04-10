canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_x, last_y;
var mousevent="empty";
color="red";
width=2;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e) {
    mousevent="mousedown";

}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e) {
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mousevent=="mousedown") {
      ctx.beginPath();
      ctx.strokeStyle="red";
        ctx.lineWidth=2;
    console.log("lastx&yposition");
    console.log(last_x);
    console.log(last_y);
    ctx.moveTo(last_x,last_y);
    console.log("currentx&yposition");
    console.log(currentx);
    console.log(currenty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
}
last_x=currentx;
last_y=currenty
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e) {
    mousevent="mouseup";

}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e) {
    mousevent="mouseleave";

}