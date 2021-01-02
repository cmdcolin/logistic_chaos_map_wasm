import("./pkg")
  .then((wasm) => {
    const canvas = document.getElementById("drawing");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(0,0,0,0.2)";

    wasm.draw(ctx, 1200, 600);
  })
  .catch(console.error);
