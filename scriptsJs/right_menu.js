var accordion_container = document.querySelector(".accordion_container");

var program_list = document.querySelector(".program_list");

var acordion = document.getElementsByClassName("channel_head");
var list = document.getElementsByClassName("accordion_ul");
var channel_head_arrow = document.getElementsByClassName("channel_head_arrow");
var player = document.querySelector(".player");

data_accordion.map((el, i) => {
  return (accordion_container.innerHTML =
    accordion_container.innerHTML +
    `<a class = "channel_head" href = "#"> <ion-icon class="channel_head_arrow"
  name="chevron-back-outline"></ion-icon> ${el.name}</a>
           <ul class ="accordion_ul" > 
           ${data_accordion[i].content.map(
             (i,
             (el) => {
               return `
                <li class = "accordion_list"  onclick="render_program_guid()">  
               <img class ="accordion_img" src = '${el.img}' alt = "img"/> <p class = "">${el.channel}</P>  
               </li>
               `;
             })
           )}
           </ul>   
  
  `);
});

var chanells = document.querySelectorAll(".accordion_list");

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
  if (offsetWidth > 1150) {
    size_bull = !size_bull;
    console.log(size_bull);
    accordion_size();
    playerAddClass();
  }
});

function accordion_size() {
  if (!size_bull) {
    accordion_container.style.transform = `translateX(${offsetWidth - 380}px)`;
  } else {
    accordion_container.style.transform = `translateX(0px)`;
  }
}

function mediaProgramlist() {
  if (offsetWidth < 1150) {
    accordion_container.style.transform = `translateX(0px)`;
  }
}

window.addEventListener("load", mediaProgramlist);

function change_bull() {
  if (offsetWidth > 1150) {
    size_bull = false;
    accordion_size();
    playerAddClass();
  }
}

var data = [];
create_data();

function create_data() {
  for (var i = -3; i <= 10; i++) {
    var date = new Date();

    var obj = {
      id: Date.now(),
      start: date.setHours(date.getHours() + i * 2),
      end: date.setHours(date.getHours() + (i + 0.25) * 2),
      title: "Electrionic program guid " + (i + 11),
    };

    data.push(obj);
  }
}

var dayOfWeekNamesLow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

render_program_guid();

function render_program_guid() {
  for (var i = 0; i < 10; i++) {
    var div = document.createElement("div");
    div.classList.add("program_list_cont");
    var program_list_head = document.createElement("div");
    program_list_head.classList.add("program_list_head");
    var program_list_day = document.createElement("h1");
    program_list_day.classList.add("program_list_day");
    var h3 = document.createElement("h3");
    var program_list_ul = document.createElement("ul");
    program_list_ul.classList.add("program_list_ul");
    for (var j = 0; j < data.length; j++) {
      var program_list_iteam = document.createElement("li");
      program_list_iteam.classList.add("program_list_iteam");
      var time = document.createElement("span");
      console.log(data[j].start);
      time.innerHTML = formatDate(new Date(data[j].start), " HH:mm");
      time.classList.add("list_iteam_time");
      var span = document.createElement("span");
      span.innerHTML = data[j].title;
      program_list_iteam.appendChild(time);
      program_list_iteam.appendChild(span);
      program_list_ul.appendChild(program_list_iteam);
    }
    var date = new Date();
    date = date.setDate(date.getDate() + i);
    date = new Date(date);
    program_list_day.innerHTML = dayOfWeekNamesLow[date.getDay()];
    h3.innerHTML = date.getDate();
    program_list_head.appendChild(program_list_day);
    program_list_head.appendChild(h3);
    div.appendChild(program_list_head);
    div.appendChild(program_list_ul);
    program_list.appendChild(div);
  }
  console.log(1);
}

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
