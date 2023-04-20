const refreshButton = document.querySelector(".name");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);
