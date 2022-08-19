const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
