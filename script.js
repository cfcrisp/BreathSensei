
document.addEventListener("DOMContentLoaded", () => {
  const useCaseTiles = document.querySelectorAll(".use-case-tiles-container .tile[method-index]");
  const techniqueTiles = document.querySelectorAll(".techniques-tiles-container .tile[method-index]");

  const useCaseOption = document.getElementById("use-case-container");
  const techniqueOption = document.getElementById("technique-container");

  const pathContainer = document.querySelector(".path-container");
  const techniquesContainer = document.querySelector(".techniques-tiles-container");
  const usecaseContainer = document.querySelector(".use-case-tiles-container");

  const selectedPath = document.querySelector(".selected-path");
  const selectedPathImage = document.querySelector(".selected-path img");
  const selectedPathTitle = document.querySelector(".selected-path-title");

  usecaseContainer?.classList.add("hidden");
  techniquesContainer?.classList.add("hidden");

  function hidePathContainer() {
    pathContainer?.classList.add("hidden");
    techniqueOption?.classList.remove("hidden");
    useCaseOption?.classList.remove("hidden");
  }

  function updateSelectedPath(image, title) {
    selectedPathImage.src = image;
    selectedPathImage.alt = title;
    selectedPathTitle.textContent = title;
    selectedPath.classList.remove("hidden");
  }

  function setupTileEventListeners(tiles) {
    tiles.forEach(tile => {
      tile.addEventListener("click", () => {
        const url = `breathe.html?method=${tile.getAttribute("method-index")}}`;
        window.location.href = url;
      });
    });
  }

  techniqueOption?.addEventListener("click", () => {
    const imgSrc = techniqueOption.dataset.img;
    const title = techniqueOption.querySelector("h2").textContent;
    hidePathContainer();
    updateSelectedPath(imgSrc, title);
    techniquesContainer?.classList.remove("hidden");
    usecaseContainer?.classList.add("hidden");
    setupTileEventListeners(techniqueTiles);
  });

  useCaseOption?.addEventListener("click", () => {
    const imgSrc = useCaseOption.dataset.img;
    const title = useCaseOption.querySelector("h2").textContent;
    hidePathContainer();
    updateSelectedPath(imgSrc, title);
    usecaseContainer?.classList.remove("hidden");
    techniquesContainer?.classList.add("hidden");
    setupTileEventListeners(useCaseTiles);
  });

});





/*const quotes = [
  '"The space between your thoughts is a garden of tranquility."',
  '"Breathe your way into a healthier & happier life."',
  '"If you seek tranquility, do less. To do less, is better."',
  '"The happiness of your life depends upon the quality of your thoughts."',
  '"Confine yourself to the present."',
  '"If you want to conquer the anxiety of life, live in the moment, live in the breath."',
  '"When you own your breath, nobody can steal your peace."',
  '"The most precious gift we can offer others is our presence."'
];
    
const quoteElement = document.getElementById("quote");

function rotateQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerHTML = quotes[randomIndex];
}*/

/*setInterval(rotateQuotes, 30000); // Change quotes every 10 seconds*/