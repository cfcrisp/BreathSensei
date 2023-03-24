
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
  const breathButton = document.getElementById("startBreathing");

  breathButton.addEventListener('click', () => {
    window.location.href = 'use-cases.html';
  });


  const quotes = [
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
    }

    window.addEventListener("load", function() {
      rotateQuotes();
    });  
    
    //rotateQuotes();
    setInterval(rotateQuotes, 30000); // Change quotes every 10 seconds
     
} 
