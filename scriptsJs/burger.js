var menuIcon = document.querySelector(".menu-icon");

var navigation = document.querySelector(".navigation");

function toggleMenuIcon() {
  menuIcon.classList.toggle("active");
}

menuIcon.addEventListener("click", toggleMenuIcon);

menuIcon.addEventListener("click", function () {
  if (navigation.style.display == "flex") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "flex";
  }
});
