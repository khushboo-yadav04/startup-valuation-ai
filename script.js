document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Believe in your idea — even before the world does.",
    "Every big startup was once just a dream and a laptop.",
    "Innovation is seeing what everybody has seen and thinking what nobody has thought.",
    "Success begins with a single step of faith in your vision."
  ];

  const quoteText = document.getElementById("quoteText");
  quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  // Fade out welcome screen after 3 seconds
  setTimeout(() => {
    document.getElementById("welcomeScreen").style.animation = "fadeOut 1s forwards";
    setTimeout(() => {
      document.getElementById("welcomeScreen").style.display = "none";
      document.getElementById("mainContainer").style.display = "block";
      document.getElementById("mainContainer").style.animation = "fadeIn 1s forwards";
    }, 1000);
  }, 3000);
});

document.getElementById("predictBtn").addEventListener("click", predictValuation);

function predictValuation() {
  const revenue = parseFloat(document.getElementById("revenue").value);
  const ebitda = parseFloat(document.getElementById("ebitda").value);
  const marketCap = parseFloat(document.getElementById("marketCap").value);
  const growth = parseFloat(document.getElementById("growth").value);
  const resultBox = document.getElementById("resultBox");
  const valuationText = document.getElementById("valuationText");
  const btn = document.getElementById("predictBtn");

  if (isNaN(revenue) || isNaN(ebitda) || isNaN(marketCap) || isNaN(growth)) {
    alert("⚠️ Please fill all the fields correctly!");
    return;
  }

  // Add loading effect
  btn.disabled = true;
  btn.textContent = "Calculating...";

  setTimeout(() => {
    const valuation =
      revenue * 2.5 + ebitda * 3 + marketCap * 0.8 + growth * 100000;

    valuationText.textContent = `₹ ${valuation.toLocaleString()} Cr`;
    resultBox.style.display = "block";

    btn.disabled = false;
    btn.textContent = "Predict Valuation";
  }, 1200);
}
