window.addEventListener("DomContentLoaded", showTime());

function showTime() {
  let date = new Date();

//   date.setTime(5000000);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

    if (h == 0) {
      h = 12;
    }
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

  //   if (h < 10) {
  //     h = "0" + h;
  //   }
  //   if (m < 10) {
  //     m = "0" + m;
  //   }
  //   if (s < 10) {
  //     s = "0" + s;
  //   }

  h = h < 10 ? (h = "0" + h) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;

  const time = `${h}:${m}.<small>${s}|${session}</small>`;

  document.getElementById("displayClock").innerHTML = time;
  setTimeout(showTime, 1000);

  //Change image background

  let bg;

  const userName = "Phuong";
  const user = document.getElementById("user");

  if (h < 8 && session === "AM") {
    bg = `url(https://source.unsplash.com/-G3rw6Y02D0)`;
    user.innerHTML = `Good morning ${userName}`;
  } else if (h < 12 && session === "AM") {
    bg = `url(https://source.unsplash.com/2z6TmSRQI64)`;
    user.innerHTML = `Good day ${userName}`;
  } else if (h < 8 && session === "PM") {
    bg = `url(https://source.unsplash.com/DK9z461HZq4)`;
    user.innerHTML = `Good afternoon ${userName}`;
  } else {
    bg = `url(https://source.unsplash.com/vhInzGLpnyI)`;
    user.innerHTML = `Good night ${userName}`;
  }

  //insert bachground image

  const body = document.querySelector("body");

  body.style.background = `${bg} center/cover`;
}


document.querySelector(".focus-container input").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        const focus = document.querySelector(".focus-container input");
    document.querySelector(".focus-container").innerHTML = `<h6>TODAY:</h6><h1>${focus.value}</h1>`
    }
});
