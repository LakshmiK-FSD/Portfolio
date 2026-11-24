import { useRef, useEffect } from "react";

function Particle() {
    const partRef = useRef(null);

    useEffect(() => {
        const canvas = partRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = [
            { r: 255, g: 215, b: 0 },
            { r: 255, g: 107, b: 53 },
            { r: 196, g: 30, b: 58 },
            { r: 240, g: 160, b: 48 },
            { r: 184, g: 134, b: 11 },
        ];
        const mouse = { x: null, y: null, radius: 50 };

        function handleMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        }
        window.addEventListener("mousemove", handleMouseMove)

        class Circle {
            constructor(x, y, dx, dy, size) {
                this.x = x;
                this.y = y;
                this.stableX = dx
                this.stableY = dy
                this.dx = dx;
                this.dy = dy;
                this.size = size;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.opacitySpeed = Math.random() * 0.008 + 0.002;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacityDir = 1;

                if (this.x < 0) {
                    this.dx = +(this.dx)
                }
                if (this.y < 0) {
                    this.dy = +(this.dy)
                }
            }
            update() {
                if (mouse.x != null) {
                    const disX = this.x - mouse.x
                    const disY = this.y - mouse.y
                    const dist = Math.sqrt(disX * disX + disY * disY)
                    if (mouse.radius > dist && dist > 0.001) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.dx += (disX / dist) * force * 0.2;
                        this.dy += (disY / dist) * force * 0.2;
                    }
                    if (mouse.radius < dist) {
                        this.dx += (this.stableX - this.dx) * 0.05;
                        this.dy += (this.stableY - this.dy) * 0.05;
                        
                    }

                }
                this.opacity += this.opacitySpeed * this.opacityDir;
                if (this.opacity >= 0.6) this.opacityDir = -1;
                if (this.opacity <= 0.05) this.opacityDir = 1;
                if (this.x + 3 > canvas.width + 20 || this.x - 3 < -20) {
                    this.dx = -this.dx;
                    this.stableX = -this.stableX
                }
                if (this.y + 3 > canvas.height + 20 || this.y - 3 < -20) {
                    this.dy = -this.dy;
                    this.stableY = -this.stableY
                }
                this.x += this.dx;
                this.y += this.dy;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
                ctx.fill();


                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.15})`;
                ctx.fill();
            }
        }



        const count = Math.min(Math.floor((canvas.width * canvas.height) / 19000), 100);
        const circles = [];
        let rafId;
        for (let i = 0; i < count; i++) {
            const speedX = (Math.random() - 0.5) * 0.8;
            const speedY = (Math.random() - 0.5) * 0.8;
            const xAxis = Math.random() * canvas.width;
            const yAxis = Math.random() * canvas.height;
            const size = Math.floor(Math.random() * 2 + 1);
            circles.push(new Circle(xAxis, yAxis, speedX, speedY, size));
        }
        const connectDist = 70;
        function connector() {
            for (let i = 0; i < circles.length; i++) {
                for (let j = 0; j < circles.length; j++) {
                    const a = circles[i]
                    const b = circles[j]
                    const dx = a.x - b.x
                    const dy = a.y - b.y
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectDist) {
                        ctx.beginPath()
                        ctx.moveTo(a.x, a.y)
                        ctx.lineTo(b.x, b.y)
                        ctx.strokeStyle = `rgba(212, 160, 23, 0.095`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();

                    }
                }
            }
        }

        function animation() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circles.forEach((c) => {
                c.update();
                c.draw();
                
            }
        );
            connector(); 
            rafId = requestAnimationFrame(animation);
        }
        function resize() {
            cancelAnimationFrame(rafId);
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            animation();
        }
        animation();
        window.addEventListener("resize", resize);



    }, []);

    return <canvas ref={partRef} id="particle" />;
}

export default Particle;