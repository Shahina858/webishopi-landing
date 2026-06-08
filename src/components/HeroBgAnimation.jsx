import { useEffect, useRef } from "react";

const NODE_COUNT = 52;
const CONNECTION_DIST = 130;
const TEAL = "rgba(20,184,166,";

function makeNode(W, H) {
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: Math.random() * 2.5 + 1.5,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.012 * (0.6 + Math.random() * 0.8),
  };
}

export default function HeroBgAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let nodes = [];

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      nodes = Array.from({ length: NODE_COUNT }, () =>
        makeNode(canvas.width, canvas.height)
      );
    }

    function loop() {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = TEAL + alpha + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Animated data packets
      const t = performance.now() / 1000;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST && (i * 13 + j * 7) % 5 === 0) {
            const progress = (t * 0.28 + (i + j) * 0.17) % 1;
            const px = a.x + (b.x - a.x) * progress;
            const py = a.y + (b.y - a.y) * progress;
            const edgeAlpha = (1 - dist / CONNECTION_DIST) * 0.7;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = TEAL + edgeAlpha + ")";
            ctx.fill();
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        n.pulse += n.pulseSpeed;
        const glow = Math.sin(n.pulse) * 0.5 + 0.5;
        const size = n.r + glow * 1.2;

        // Outer glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, size + 3, 0, Math.PI * 2);
        ctx.fillStyle = TEAL + (0.06 + glow * 0.1) + ")";
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
        ctx.fillStyle = TEAL + (0.45 + glow * 0.45) + ")";
        ctx.fill();

        // Move
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = W + 20;
        if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20;
        if (n.y > H + 20) n.y = -20;
      }

      animId = requestAnimationFrame(loop);
    }

    resize();
    loop();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
