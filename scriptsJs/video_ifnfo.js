var title_text = document.querySelector(".title_text");

var video_description = document.querySelector(".video-description");

var chevron_back = document.querySelector(".chevron-back");

title_text.addEventListener("click", function () {
  if (video_description.style.display == "block") {
    video_description.style.display = "none";
    chevron_back.style.transform = "rotate(270deg)";
  } else {
    video_description.style.display = "block";
    chevron_back.style.transform = "rotate(90deg)";
  }
});
