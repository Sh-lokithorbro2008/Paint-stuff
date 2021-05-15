var mousevent="empty";
var last_position_of_x,last_position_of_y;

var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
color="black";
width_of_line=3;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    mousevent="mymousedown"
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
    mousevent="mymouseleave"
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mousevent="mymouseup"
}

canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e)
{
    current_position_of_mousex=e.clientX-canvas.offsetLeft;
    current_position_of_mousey=e.clientY-canvas.offsetTop;

    if(mousevent=="mymousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line

        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mousex,current_position_of_mousey)
        ctx.stroke()
    }
    last_position_of_x=current_position_of_mousex;
    last_position_of_y=current_position_of_mousey;
}