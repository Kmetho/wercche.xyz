const refreshButton = document.querySelector(".name");
const canvas = document.querySelector("canvas");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);
