document.addEventListener("DOMContentLoaded", function () {
  let progressLabel = document.getElementById("progress-label");
  let progressValue = 0;

  let progressInterval = setInterval(function () {
    if (progressValue < 75) {
      progressValue++;
      progressLabel.textContent = progressValue + "%";
    } else {
      clearInterval(progressInterval);
    }
  }, 40);
});
