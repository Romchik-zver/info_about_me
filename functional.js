document.getElementById("toggleButton1").addEventListener("click", function () {
  const hiddenText = document.getElementById("hiddenText");
  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
    this.textContent = "Enough,show me your projects!";
  } else {
    hiddenText.style.display = "none";
    this.textContent = "Who am I?";
    window.location.href = "links.html";
  }
});
