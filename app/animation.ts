// animate.ts
const animation = (canvasId: string) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement; // Cast to HTMLCanvasElement
  const ctx = canvas.getContext('2d');

  if (!ctx) return; // Ensure context is available

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Update canvas height on window resize
  window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });

  // Blob properties with types
  interface Blob {
    x: number;
    y: number;
    dx: number;
    dy: number;
    size: number;
  }

  const blob1: Blob = {
    x: 200,
    y: 300,
    dx: 0.2 + Math.random() * 0.3,
    dy: 0.2 + Math.random() * 0.3,
    size: 450,
  };

  const blob2: Blob = {
    x: 600,
    y: 300,
    dx: 0.5 + Math.random() * 0.3,
    dy: 0.5 + Math.random() * 0.3,
    size: 450,
  };

  const blob3: Blob = {
    x: 1000,
    y: 500,
    dx: 0.4 + Math.random() * 0.3,
    dy: 0.4 + Math.random() * 0.3,
    size: 450,
  };

  // Function to draw a blurry blob
  const drawBlob = (x: number, y: number, size: number, color: string) => {
    const gradient = ctx.createRadialGradient(x, y, size / 5, x, y, size);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Transparent at the edges

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();
  };

  // Function to update the position of the blobs
  const updatePosition = () => {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Move blob 1
    if (blob1.x + blob1.size > canvasWidth + 300 || blob1.x - blob1.size < -300) {
      blob1.dx = -blob1.dx;
    }
    if (blob1.y + blob1.size > canvasHeight + 300 || blob1.y - blob1.size < -300) {
      blob1.dy = -blob1.dy;
    }
    blob1.x += blob1.dx;
    blob1.y += blob1.dy;

    // Move blob 2
    if (blob2.x + blob2.size > canvasWidth + 300 || blob2.x - blob2.size < -300) {
      blob2.dx = -blob2.dx;
    }
    if (blob2.y + blob2.size > canvasHeight + 300 || blob2.y - blob2.size < -300) {
      blob2.dy = -blob2.dy;
    }
    blob2.x += blob2.dx;
    blob2.y += blob2.dy;

    // Move blob 3
    if (blob3.x + blob3.size > canvasWidth + 300 || blob3.x - blob3.size < -300) {
      blob3.dx = -blob3.dx;
    }
    if (blob3.y + blob3.size > canvasHeight + 300 || blob3.y - blob3.size < -300) {
      blob3.dy = -blob3.dy;
    }
    blob3.x += blob3.dx;
    blob3.y += blob3.dy;
  };

  // Animation loop
  const animateLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlob(blob1.x, blob1.y, blob1.size, '#FF92AA'); // Color for blob 1
    drawBlob(blob2.x, blob2.y, blob2.size, '#BADBFF'); // Color for blob 2
    drawBlob(blob3.x, blob3.y, blob3.size, '#D6D4E3'); // Color for blob 3
    updatePosition();
    requestAnimationFrame(animateLoop);
  };

  animateLoop(); // Start the animation
};

// Export the function
export default animation;