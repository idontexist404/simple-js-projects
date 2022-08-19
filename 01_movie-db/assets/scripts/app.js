const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");

const backDrop = document.getElementById("backdrop");

const toggleBackdrop = () => {
  backDrop.classList.toggle("visible");
};

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieModal();
}

const backDropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backDrop.addEventListener("click", backDropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
