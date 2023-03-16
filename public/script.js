const cursorB = document.querySelector(".big");
const cursorS = document.querySelector(".small");

document.addEventListener("mousemove", (e) => {
  cursorB.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
  cursorS.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
});
