var dropbtn_language = document.querySelector(".dropbtn_language");
var dropdown_content_language = document.querySelector(
  ".dropdown_content_language"
);

var all_cont = document.querySelector(".all_cont");

var offsetWidth = document.body.offsetWidth;

var btn_search = document.querySelector(".search");
var search_input = document.querySelector(".search_input");
var search_block_input = document.querySelector(".search_block_input");
var filter = document.querySelector(".filter");

var dropdown = document.querySelector(".dropdown");

var dropdown_bull = true;
var search_bull = true;
dropbtn_language.addEventListener("click", function () {
  dropdown_bull = !dropdown_bull;
  if (!dropdown_bull) {
    dropdown_content_language.style.display = "block";
    dropbtn_language.style.backgroundColor = "#f1f1f1";
    dropbtn_language.style.color = "#f60";
  } else {
    dropdown_content_language.style.display = "none";
    dropbtn_language.style.color = "#f1f1f1";
    dropbtn_language.style.backgroundColor = "#1a1a1a";
  }
});

btn_search.onclick = function () {
  search_block_input.className = "search_block_input_active";
  btn_search.className = "search_active";
  search_input.className = "search_input_avctive";
  filter.style.display = "block";
  search_bull = false;
};

dropdown.onmouseover = function () {
  if (search_bull === false) {
    btn_search.className = "search";
    search_input.className = "search_input";
    search_block_input.className = "search_block_input";
    filter.style.display = "none";
    search_bull = true;
  }
};

function controlWidth() {
  all_cont.style.width = `${offsetWidth - 380}px`;
}

window.addEventListener("resize", controlWidth);
window.addEventListener("load", controlWidth);
