const hMenu = document.querySelector(".hamburger-menu-container");
const overlay = document.querySelector(".body-overlay");
const menuIcon = document.querySelector(".nav-bar-menu");

menuIcon.addEventListener("click", () => {
  hMenu.style.transform = `translateX(0)`;
  hMenu.style.opacity = 1;
  overlay.style.visibility = "visible";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hMenu.style.transform = `translateX(-300px)`;
    hMenu.style.opacity = 0;
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
      overlay.style.visibility = "hidden";
    }, 350);
  }
});

overlay.addEventListener("click", () => {
  hMenu.style.transform = `translateX(-300px)`;
  hMenu.style.opacity = 0;
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  setTimeout(() => {
    overlay.style.visibility = "hidden";
  }, 350);
});
