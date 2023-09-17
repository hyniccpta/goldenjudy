
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("#playBtn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
