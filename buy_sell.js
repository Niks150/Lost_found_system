
  function togglePostAd() {
    var adContainer = document.getElementById("postAdContainer");
    if (adContainer.style.display === "none" || adContainer.style.display === "") {
      adContainer.style.display = "block";
    } else {
      adContainer.style.display = "none";
    }
  }
