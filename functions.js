function setup(){
    createCanvas(750, 500);
    x = width/2;
    y = height/2;
}

// Size of the ship
var r = 12;

var showarrows = true;

// Draw the ship and other stuff
function display() {
    wrapEdges();
    background(255);
    textSize(12);
    textStyle(NORMAL);

    strokeWeight(10);

    if (showarrows) {
    textSize(20);
    strokeWeight(0);
    fill(255,0,0);
    text("Velocity",0.8*width,0.8*height+75);

    fill(204,0,204);
    text("Acceleration",0.8*width,0.8*height+50);
    }

    fill(0,0,0); //If more text is written elsewhere make sure the default is black
    stroke(0,0,0); // If more lines are drawn elsewhere make sure the default is black
    strokeWeight(0);
     drawText("Press the arrow keys to move the blob!",0.25*width,0.75*height);  

}

function wrapEdges() {
    var buffer = r*2;
    if (x > width +  buffer) x = -buffer;
    else if (x <    -buffer) x = width+buffer;
    if (y > height + buffer) y = -buffer;
    else if (y <    -buffer) y = height+buffer;
}

function drawBlob( _x,  _y){
    strokeWeight(2);
      //  fill(255, 255, 0);
    noFill();
    stroke(0);
    ellipse(_x, height - _y, 50, 50);  
}

function drawBlob( _x,  _y, _vx, _vy){
    strokeWeight(2);
    //    fill(255);
    noFill();
    stroke(0);
    ellipse(_x, height - _y, 50, 50);  
  
            strokeWeight(10);
    var tri_width=7;

    // Draw velocity arrow
    var v_scaling=5.0;
    stroke(255,0,0); // makes the line red
    strokeWeight(3); // makes the line thicker

      fill(0,0,0); //If more text is written elsewhere make sure the default is black
    stroke(0,0,0); // If more lines are drawn elsewhere make sure the default is black
    strokeWeight(0);

}

function drawBlob( _x,  _y, _vx, _vy, _ax, _ay){
    strokeWeight(2);
    //    fill(255);
    noFill();
    stroke(0);
    ellipse(_x, height - _y, 50, 50);  
  
            strokeWeight(10);
    var tri_width=7;

    // Draw velocity arrow
    var v_scaling=5.0;
    stroke(255,0,0); // makes the line red
    strokeWeight(3); // makes the line thicker

    if ( ((_vx !== 0) || (_vy !== 0)) && showarrows) {
        drawLine(_x,_y,_x+v_scaling*_vx,_y+v_scaling*_vy);
        var vel_angle = -atan2(_vy,_vx);
        fill(255,0,0); // makes the triangle red
        drawTriangle(_x+v_scaling*_vx+sin(vel_angle)*tri_width/2,_y+v_scaling*_vy+cos(vel_angle)*tri_width/2,_x+v_scaling*_vx-sin(vel_angle)*tri_width/2,_y+v_scaling*_vy-cos(vel_angle)*tri_width/2,_x+v_scaling*_vx+cos(vel_angle)*10,_y+v_scaling*_vy-sin(vel_angle)*10);
    }
  
    var a_scaling=20;
    f_angle = -atan2(_ay,_ax);
    if (((_ax !== 0) || (_ay !== 0)) && showarrows) {
    stroke(204,0,204); // makes the line purple
    drawLine(x,y,x+a_scaling*_ax,y+a_scaling*_ay);
    fill(204,0,204); // makes the triangle purple
    drawTriangle(x+a_scaling*_ax+sin(f_angle)*tri_width/2,y+a_scaling*_ay+cos(f_angle)*tri_width/2,x+a_scaling*_ax-sin(f_angle)*tri_width/2,y+a_scaling*_ay-cos(f_angle)*tri_width/2,x+a_scaling*_ax+cos(f_angle)*10,y+a_scaling*_ay-sin(f_angle)*10);
    }
  

      fill(0,0,0); //If more text is written elsewhere make sure the default is black
    stroke(0,0,0); // If more lines are drawn elsewhere make sure the default is black
    strokeWeight(0);

}

function drawEllipse( _x,  _y,  _w,  _h){
  ellipse(_x, height - _y, _w, _h);  
}

function drawLine( _x1,  _y1,  _x2,  _y2){
  strokeWeight(2);
  line(_x1, height - _y1, _x2, height - _y2);  
}

function drawPoint( _x,  _y){
    strokeWeight(2);
    point(_x, height - _y);  
    strokeWeight(0);
}

function drawQuad( _x1,  _y1,  _x2,  _y2,  _x3,  _y3,  _x4,  _y4){
  quad(_x1, height - _y1, _x2, height - _y2, _x3, height - _y3, _x4, height - _y4);  
}

function drawRect( _x,  _y,  _w,  _h){
  rect(_x, height - _y, _w, _h);  
}

function drawRect( _x,  _y,  _w,  _h,  _r){
  rect(_x, height - _y, _w, _h, _r);  
}

function drawRect( _x,  _y,  _w,  _h,  _tl,  _tr,  _br,  _bl){
  rect(_x, height - _y, _w, _h, _tl, _tr, _br, _bl);  
}

function drawTriangle( _x1,  _y1,  _x2,  _y2,  _x3,  _y3){
  triangle(_x1, height - _y1, _x2, height - _y2, _x3, height - _y3);
}

function drawText( _str,  _x, _y){
    text(_str, _x, height- _y);
}

