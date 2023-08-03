const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["#ffff00", "#ffea00", "#ffd200", "#ffb700", "#ff9a26", "#ff7946", "#ff5264", "#ff1681", "#ff00a0", "#ff00c0", "#ff00e1", "#ff00ff"]

circles.forEach(function(circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index) {
        // Position the first circle at the mouse position
        circle.style.left = x - 8 + "px";
        circle.style.top = y -8 + "px";
        
        circle.style.transform =  `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        // Position the next circle behind the one before it
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.25;
        y += (nextCircle.y - y) * 0.25;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();