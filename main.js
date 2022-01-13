var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "blue";
    width_of_line = 2;
var width=screen.width
if (width<992) {
    document.getElementById("myCanvas").width=width-70
    document.getElementById("myCanvas").height=screen.height-200
    document.body.style.overflow="hidden"
}
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    { last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
      last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
     }   
    canvas.addEventListener("touchmove", my_touchemove);
    function my_touchemove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clienty - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_position_of_x, last_position_of_y);

        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    

    }