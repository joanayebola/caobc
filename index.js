window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader"); // Use querySelector to target the preloader by classname
  const content = document.getElementById("content");

  function showContent() {
    preloader.style.display = "none";
    content.style.display = "block";
  }

  function changeBackgroundColor() {
    const shadesOfPurple = [
      "#8b35e2", // MediumPurple
      "#8a2be2", // BlueViolet
      "#ba55d3", // MediumOrchid
      "#800080", // Purple
      "#a020f0", // Purple2
    ];

    const randomColor =
      shadesOfPurple[Math.floor(Math.random() * shadesOfPurple.length)];
    document.body.style.backgroundColor = randomColor;
  }

  function changeFontStyle() {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter) => {
      const randomFontSize = Math.floor(Math.random() * 24) + 48; // Random font size between 48px and 72px
      letter.style.fontSize = `${randomFontSize}px`;
    });
  }

  showContent(); // Show the content after the page fully loads
});
