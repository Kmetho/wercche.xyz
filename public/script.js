const cursor = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;"
  );
});
