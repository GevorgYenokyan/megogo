var next_btn = document.getElementById("next");

var prev_btn = document.getElementById("prev");

var accordion_list = document.querySelectorAll(".accordion_list");

var accordion_index = 0;

var program_list = document.querySelector(".program_list");

var accordion_container = document.querySelector(".accordion_container");

var chanels_btn = document.querySelector(".btn_info");

var program_btn = document.querySelector("#btn_info_id");

function play_video(chanell_index) {
  if (Hls.isSupported()) {
    var video = document.getElementById("video");
    var hls = new Hls();
    quelle = chanell_index;
    //quelle = 'http://linux-app.tv:6204/live/21164920/31520888/23808.m3u8';
    hls.loadSource(quelle);

    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = "https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8";
    video.addEventListener("canplay", function () {
      video.play();
    });
  }
}

play_video(data_channel_api[accordion_index]);

function showActive_element() {
  var accordion_list = document.querySelectorAll(".accordion_list");

  for (var i = 0; i <= accordion_list.length - 1; i++) {
    if (i == accordion_index) {
      accordion_list[i].classList.add("active_element");
    } else {
      accordion_list[i].classList.remove("active_element");
    }
  }
}

function next() {
  if (accordion_index < accordion_list.length - 1) {
    accordion_index++;
  }
  showActive_element();
  play_video(data_channel_api[accordion_index]);
}

function prev() {
  if (accordion_index >= 1) {
    accordion_index--;
  }
  showActive_element();
  play_video(data_channel_api[accordion_index]);
}

next_btn.addEventListener("click", next);
prev_btn.addEventListener("click", prev);

program_btn.addEventListener("click", function () {
  program_list.style.display = "flex";
  accordion_container.style.display = "none";
});

chanels_btn.addEventListener("click", function () {
  program_list.style.display = "none";
  accordion_container.style.display = "flex";
});
