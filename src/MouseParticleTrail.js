// import React, { useEffect, useRef } from "react";

// const MouseParticleTrail = () => {
//   const canvasRef = useRef(null);
//   const maxDistance = 90;

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const devicePixelRatio = window.devicePixelRatio || 1;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth * devicePixelRatio;
//       canvas.height = window.innerHeight * devicePixelRatio;
//       ctx.scale(devicePixelRatio, devicePixelRatio);
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     let particles = [];

//     const createParticle = (x, y) => {
//       const size = 3;
//       // const color = `hsl(${Math.random() * 360},100%,50%)`;
//       const color = " #ffffff";
//       const speedX = Math.random() * 2 - 1;
//       const speedY = Math.random() * 2 - 1;

//       return { x, y, size, color, speedX, speedY };
//     };

//     const connectParticles = () => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.hypot(dx, dy);

//           if (distance <= maxDistance) {
//             const opacity = 1 - distance / maxDistance;
//             ctx.globalAlpha = opacity;
//             ctx.strokeStyle = particles[i].color;
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       requestAnimationFrame(animate);

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       connectParticles();

//       particles.forEach((particle, index) => {
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;
//         particle.size -= 0.05;

//         if (particle.size <= 0.3) {
//           particles.splice(index, 1);
//         }

//         ctx.fillStyle = particle.color;
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fill();
//       });
//     };

//     animate();

//     const handleMouseMove = (event) => {
//       const rect = canvas.getBoundingClientRect();
//       const x = event.clientX - rect.left;
//       const y = event.clientY - rect.top;

//       for (let i = 0; i < 1; i++) {
//         particles.push(createParticle(x, y));
//       }
//     };

//     canvas.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       canvas.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="particle-canvas"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 999999,
//       }}
//     />
//   );
// };

// export default MouseParticleTrail;
