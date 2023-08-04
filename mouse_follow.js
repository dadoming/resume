const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (!isMobile)
{
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    const colors = ["#771624", "#81282b", "#8a3832", "#94473a", "#9d5543", "#a6644d", "#ae7258", "#b78064", "#bf8e71", "#c89c7e", "#d0ab8c", "#d9b99b"];

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
}
else 
{
    const circles = document.querySelectorAll(".circle");

    circles.forEach(function(circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = "#f5f5dc";
    });
}