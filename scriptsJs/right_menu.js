var accordion_container = document.querySelector(".accordion_container");

var program_list = document.querySelector(".program_list");

var acordion = document.getElementsByClassName("channel_head");
var list = document.getElementsByClassName("accordion_ul");
var channel_head_arrow = document.getElementsByClassName("channel_head_arrow");
var player = document.querySelector(".player");

accordion_container.innerHTML = data_accordion.map((el, i) => {
  return `<a class = "channel_head" href = "#"> <ion-icon class="channel_head_arrow"
  name="chevron-back-outline"></ion-icon> ${el.name}</a>
           <ul class ="accordion_ul">
           ${data_accordion[i].content.map(
             (i,
             (el) => {
               return `
                <li class = "accordion_list">  
               <img class ="accordion_img" src = '${el.img}' alt = "img"/> <p>${el.channel}</P>  
               </li>
               `;
             })
           )}
           </ul>   
  
  `;
});

for (let i = 0; i < acordion.length; i++) {
  acordion[i].addEventListener("click", function () {
    if (list[i].style.display == "block") {
      list[i].style.display = "none";
      channel_head_arrow[i].style.transform = "rotate(180deg)";
    } else {
      list[i].style.display = "block";
      channel_head_arrow[i].style.transform = "rotate(270deg)";
    }
  });
}

let size_bull = false;
var accordion_container = document.querySelector(".acoridion_channels");

var program = document.querySelector(".program");

program.addEventListener("click", function () {
  size_bull = !size_bull;
  console.log(size_bull);
  accordion_size();
  playerAddClass();
});

function accordion_size() {
  if (!size_bull) {
    accordion_container.style.transform = `translateX(${offsetWidth - 380}px)`;
  } else {
    accordion_container.style.transform = `translateX(0px)`;
  }
}

function change_bull() {
  size_bull = false;
  accordion_size();
  playerAddClass();
}

dataProgramList.map((el, i) => {
  return (program_list.innerHTML =
    program_list.innerHTML +
    ` <div class = "program_list_cont"   onclick="change_bull();">
      <div class = "program_list_head">
        <h1 class = "program_list_day">${el.day}</h1>
         <h3>${el.month}</h3>
      </div>
        <ul class ="program_list_ul">
         <li class = "program_list_iteam">${el.list_1}</li>
         <li class = "program_list_iteam">${el.list_2}</li>
         <li class = "program_list_iteam">${el.list_3}</li>
         <li class = "program_list_iteam">${el.list_4}</li>
         <li class = "program_list_iteam">${el.list_5}</li>
        </ul>
    </div>
         `);
});

var video_text = document.querySelector(".video_text");

var player_container = document.querySelector(".player_container");

function playerAddClass() {
  if (!size_bull) {
    player.className = "player";
    video_text.style.display = "flex";
    setTimeout(() => {
      player_container.style.zIndex = "0";
    }, 400);
  } else {
    player.className = "player_false";
    video_text.style.display = "none";
    player_container.style.zIndex = "9000000000";
  }
}
