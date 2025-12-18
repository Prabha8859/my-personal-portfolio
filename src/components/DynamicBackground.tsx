import { useEffect, useRef } from "react";

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Create flowing gradient blobs
    const blobs = [
      { x: 0.3, y: 0.2, radius: 400, color: { h: 174, s: 72, l: 56 }, speed: 0.0003, offset: 0 },
      { x: 0.7, y: 0.6, radius: 350, color: { h: 280, s: 70, l: 60 }, speed: 0.0004, offset: 2 },
      { x: 0.5, y: 0.8, radius: 300, color: { h: 200, s: 80, l: 50 }, speed: 0.0005, offset: 4 },
      { x: 0.2, y: 0.7, radius: 280, color: { h: 320, s: 65, l: 55 }, speed: 0.0003, offset: 1 },
      { x: 0.8, y: 0.3, radius: 320, color: { h: 230, s: 70, l: 60 }, speed: 0.0004, offset: 3 },
    ];

    const animate = () => {
      time += 1;
      ctx.fillStyle = "hsl(222 47% 6%)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        const x = canvas.width * blob.x + Math.sin(time * blob.speed + blob.offset) * 150;
        const y = canvas.height * blob.y + Math.cos(time * blob.speed * 0.8 + blob.offset) * 100;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, blob.radius);
        gradient.addColorStop(0, `hsla(${blob.color.h}, ${blob.color.s}%, ${blob.color.l}%, 0.15)`);
        gradient.addColorStop(0.5, `hsla(${blob.color.h}, ${blob.color.s}%, ${blob.color.l}%, 0.05)`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default DynamicBackground;
