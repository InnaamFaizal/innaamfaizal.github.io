x = 0;
y = 0;

vx = 0;
vy = 0;

ax = 0;
ay = 0;

i = 0;

ax_int = 0;
ay_int = 0;

dt = 0.1;
// dt_num = 0.1;

mov_left = 0;
mov_right = 0;
mov_top = 0;
mov_bottom = 0;

function draw(){
    prev_vx = vx;
    prev_vx = Math.abs(prev_vx)
    prev_vy = vy;
    prev_vy = Math.abs(prev_vy)
    vx += ax*dt; // velocity = velocity + acceleration * rate of change of time
    abs_vx = Math.abs(vx);
    new_vx = Math.round(abs_vx);
    new_prev_vx = Math.round(prev_vx);
    vy += ay*dt;
    abs_vy = Math.abs(vy);
    new_vy = Math.round(abs_vy);
    new_prev_vy = Math.round(prev_vy);
    new_ax_int = Math.abs(ax_int);
    new_ay_int = Math.abs(ay_int)
    // if ((new_vx + new_vy)%10 == 0 && (new_vx + new_vy) != 0) {
    new_ax = ax;
    new_ay = ay;
    if (Math.abs(new_ax) == new_ax && vx < 0) {
        new_ax = new_ax - (new_ax + new_ax);
    }
    if (Math.abs(new_ay) == new_ay && vy < 0) {
        new_ay = new_ay - (new_ay + new_ay);
    }
    else {
        if (vx < 0) {
            new_ax = Math.abs(ax);
        }
        if (vy < 0) {
            new_ay = Math.abs(ay);
        }
    }
    // document.getElementById('velocity_test').innerHTML = `${new_vx + new_vy} = ${new_prev_vx + new_prev_vy} + ${new_ax + new_ay} * ${dt}`
    if ((new_vx + new_vy) % 5 == 0 && (new_vx + new_vy) != 0) {
        checker = (new_vx + new_vy) * 10
        
        if ((checker - 1) < (new_ax_int + new_ay_int) && (new_ax_int + new_ay_int) < (checker + 1)) {
            newElement = document.createElement('p');
            elementIdName = 'test' + i;
            newElement.setAttribute('id', elementIdName);
            newElement.innerHTML = `${new_vx + new_vy} = ${new_ax_int + new_ay_int} * ${dt}`;
            document.getElementById('info-div').appendChild(newElement);
            i++;
        }
    }
    // }

    // del_t = dt_num / (new_vx + new_vy);
    // new_del_t = Math.round(del_t)
    // new_dt_num = Math.round(dt_num)

    // document.getElementById('vel-formula').innerHTML = `${new_vy + new_vy} = ${new_dt_num} / ${new_del_t}`

    // document.getElementById('force_text').innerHTML = new_vx + new_vy;
   
    x += vx * dt;
    y += vy * dt;
    ax = 0;
    ay = 0;

    // if (ax == 0 && ay == 0) {
    //     document.getElementById('text-info').innerHTML = "Acceleration is defined as the rate of change of velocity. Hence, when the acceleration is 0, the velocity doesn't change, and stays at a constant velocity."
    // }

    if (keyIsDown(LEFT_ARROW)) {
        ax = -1;
        ax_int -= 1;
        mov_left += 1.5 * dt;
        // dt_num += 0.1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        ax = 1;
        ax_int += 1;
        mov_right += 1.5 * dt;
        // dt_num += 0.1;
    }
    if (keyIsDown(UP_ARROW)) {
	    ay = 1;
        ay_int += 1;
        mov_top += 1.5 * dt;
        // dt_num += 0.1;
    }
    if (keyIsDown(DOWN_ARROW)) {
	    ay = -1;
        ay_int -= 1;
        mov_bottom += 1.5 * dt;
        // dt_num += 0.1;
    }
    // if (keyUp) {
    //     new_ax = 0;
    //     new_ay = 0;
    // }

    display();

    drawBlob(x,y,vx,vy,ax,ay);

} // end draw()
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);