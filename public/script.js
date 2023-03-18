const cursorB = document.querySelector(".big");
const cursorS = document.querySelector(".small");
const anchors = document.querySelectorAll("a");
const innerBig = document.querySelector(".inner-big");
const innerBigger = document.querySelector(".inner-bigger");
const innerTxt = document.querySelector(".inner-txt");

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

anchors.addEventListener(onmouseenter, () => {
  innerBig.setAttribute("style", "visibility: hidden;");
  innerBigger.setAttribute("style", "visibility: visible;");
  innerTxt.setAttribute("style", "visibility: visible;");
});
anchors.addEventListener(onmouseleave, () => {
  innerBig.setAttribute("style", "visibility: visible;");
  innerBigger.setAttribute("style", "visibility: hidden;");
  innerTxt.setAttribute("style", "visibility: hidden;");
});
