const envelope = document.querySelector("#open-letter");
const hugButton = document.querySelector("#hug-button");
const hugFill = document.querySelector("#hug-fill");
const hugNote = document.querySelector("#hug-note");
const skyCanvas = document.querySelector("#love-sky");
const photoInputs = document.querySelectorAll(".photo-input");
const galaxyBodies = document.querySelectorAll(".galaxy-body");
const galaxyMessage = document.querySelector("#galaxy-message");

let hugLevel = 0;

if (envelope) {
  envelope.addEventListener("click", () => {
    envelope.classList.toggle("is-open");
    envelope.closest(".envelope-card")?.classList.toggle("letter-open", envelope.classList.contains("is-open"));
  });
}

if (hugButton && hugFill && hugNote) {
  hugButton.addEventListener("click", () => {
    hugLevel = Math.min(100, hugLevel + 20);
    hugFill.style.setProperty("--hug-level", `${hugLevel}%`);
    hugNote.textContent =
      hugLevel >= 100
        ? "Hug sent. This one is extra tight."
        : `Hug level: ${hugLevel}% charged.`;
  });
}

if (skyCanvas) {
  const context = skyCanvas.getContext("2d");
  const stars = Array.from({ length: 120 }, (_, index) => ({
    x: (index * 73) % skyCanvas.width,
    y: (index * 47) % skyCanvas.height,
    r: 0.8 + (index % 5) * 0.45,
    pulse: index * 0.23,
  }));
  const pointer = { x: skyCanvas.width * 0.5, y: skyCanvas.height * 0.5 };

  function drawSky(time = 0) {
    context.clearRect(0, 0, skyCanvas.width, skyCanvas.height);
    const gradient = context.createRadialGradient(
      skyCanvas.width * 0.48,
      skyCanvas.height * 0.46,
      20,
      skyCanvas.width * 0.48,
      skyCanvas.height * 0.46,
      skyCanvas.width * 0.68,
    );
    gradient.addColorStop(0, "rgba(255, 244, 168, 0.26)");
    gradient.addColorStop(0.22, "rgba(217, 61, 113, 0.18)");
    gradient.addColorStop(0.52, "rgba(101, 68, 144, 0.24)");
    gradient.addColorStop(1, "rgba(16, 13, 32, 0.02)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, skyCanvas.width, skyCanvas.height);

    context.save();
    context.translate(skyCanvas.width * 0.5, skyCanvas.height * 0.48);
    context.rotate(-0.28);
    for (let ring = 0; ring < 9; ring += 1) {
      context.beginPath();
      context.strokeStyle = `rgba(255, 215, 223, ${0.07 - ring * 0.004})`;
      context.lineWidth = 18 - ring;
      context.ellipse(0, 0, 80 + ring * 44, 22 + ring * 16, 0, 0, Math.PI * 2);
      context.stroke();
    }
    context.restore();

    context.lineWidth = 1.4;

    stars.forEach((star, index) => {
      const glow = 0.55 + Math.sin(time * 0.002 + star.pulse) * 0.28;
      const pull = Math.max(0, 1 - Math.hypot(pointer.x - star.x, pointer.y - star.y) / 260);
      const x = star.x + (pointer.x - star.x) * pull * 0.05;
      const y = star.y + (pointer.y - star.y) * pull * 0.05;

      context.beginPath();
      context.fillStyle = `rgba(255, 255, 255, ${glow})`;
      context.arc(x, y, star.r + pull * 1.8, 0, Math.PI * 2);
      context.fill();

      const next = stars[(index + 7) % stars.length];
      const distance = Math.hypot(next.x - x, next.y - y);
      if (distance < 180) {
        context.beginPath();
        context.strokeStyle = `rgba(255, 215, 223, ${0.13 + pull * 0.22})`;
        context.moveTo(x, y);
        context.lineTo(next.x, next.y);
        context.stroke();
      }
    });

    context.beginPath();
    context.fillStyle = "rgba(255, 244, 168, 0.88)";
    context.arc(pointer.x, pointer.y, 4.5, 0, Math.PI * 2);
    context.fill();
    requestAnimationFrame(drawSky);
  }

  skyCanvas.addEventListener("pointermove", (event) => {
    const rect = skyCanvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * skyCanvas.width;
    pointer.y = ((event.clientY - rect.top) / rect.height) * skyCanvas.height;
  });

  drawSky();
}

galaxyBodies.forEach((body) => {
  body.addEventListener("click", () => {
    galaxyBodies.forEach((item) => item.classList.remove("is-picked"));
    body.classList.add("is-picked");
    galaxyMessage.textContent = body.dataset.galaxy;
    galaxyMessage.classList.remove("is-popping");
    window.setTimeout(() => galaxyMessage.classList.add("is-popping"), 20);
  });
});

photoInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const [file] = input.files;
    const target = document.querySelector(`#${input.dataset.target}`);
    if (!file || !target) return;

    const image = document.createElement("img");
    image.alt = "Selected memory";
    image.src = URL.createObjectURL(file);
    target.innerHTML = "";
    target.appendChild(image);
  });
});
