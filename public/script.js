const cursorB = document.querySelector(".big");
const cursorS = document.querySelector(".small");

document.addEventListener("mousemove", (e) => {
  cursorB.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
  cursorS.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
});
