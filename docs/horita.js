(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let birthday = "Dec 14, 2023 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "Quién diría 19 años";
        countdown.style.display = "none";
        content.style.display = "block";

        document.getElementById("irANuevaPagina").style.display =
          "inline-block";
        document.getElementById("videoSection").style.display = "block";
        giratingButton.classList.remove("hide-button");
        showImageButton.classList.remove("hide-button");

        clearInterval(x);
      }
    }, 0);
  const audioButton = document.getElementById("audioButton");
  const backgroundAudio = document.getElementById("backgroundAudio");

  let audioPlaying = false;

  audioButton.addEventListener("click", function () {
    if (!audioPlaying) {
      backgroundAudio.play();
      audioButton.textContent = "Detener música";
    } else {
      backgroundAudio.pause();
      audioButton.textContent = "No sabo que música te gusta";
    }
    audioPlaying = !audioPlaying;
  });

  document
    .getElementById("giratingButton")
    .addEventListener("click", function () {
      const imagenGiratoria = document.getElementById("imagenGiratoria");
      const imagenContainer = document.getElementById(
        "imagenGiratoriaContainer"
      );

      imagenGiratoria.style.display = "block";

      const randomX = Math.floor(Math.random() * (window.innerWidth - 50));
      const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

      imagenContainer.style.left = `${randomX}px`;
      imagenContainer.style.top = `${randomY}px`;

      imagenGiratoria.style.transform = "rotate(360deg)";

      setTimeout(function () {
        imagenGiratoria.style.display = "none";
        imagenGiratoria.style.transform = "rotate(0deg)";
      }, 6000);
    });

  const showImageButton = document.getElementById("showImageButton");
  const showImage = document.getElementById("showImage");

  showImageButton.addEventListener("click", function () {
    showImage.style.display = "block";
    setTimeout(function () {
      showImage.style.display = "none";
    }, 2000);
  });

  // document
  //   .getElementById("irANuevaPagina")
  //   .addEventListener("click", function () {
  //     window.location.href = "login.html";
  //   });
})();
