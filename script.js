// background color
function changeBackgroundColor() {
    document.body.style.background = "linear-gradient(to right, purple, black, purple)";
} 
changeBackgroundColor();



// define amPm as variable
var amPm;



// time
function showTxtClock() {
    var showDate = new Date();

    var daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
    var dayOfWeek = showDate.getDay();
    var formattedDay = daysOfWeek[dayOfWeek];

    var hours = showDate.getHours();
    var minutes = showDate.getMinutes();
    var seconds = showDate.getSeconds();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (hours == 0) {
        hours12 = true;
        hours = 12;
        amPm = "AM";
    } else if (hours < 12) {
        hours12 = true;
        amPm = "AM";
    } else if (hours == 12) {
        amPm = "PM";
    } else {
        hours = hours - 12;
        amPm = "PM";
    }

    var formattedTime = hours + " :" + " " + minutes + " :" + " " + seconds + " ";

    document.getElementById("txtClock").innerHTML = formattedTime;

// resize amPm 
    var ampmSpan = document.createElement("span");
    ampmSpan.textContent = amPm;
    ampmSpan.style.fontSize = "0.5em";
    txtClock.appendChild(ampmSpan);

// Add days of week
    var daySpan = document.createElement("span");
    daySpan.textContent = " " + formattedDay + "day";
    document.getElementById("txtClock").appendChild(daySpan);
    
    setTimeout(showTxtClock, 1000);
}  
window.onload = showTxtClock();



// move & style time
function styleClock() {
    var txtClock = document.getElementById("txtClock");
    txtClock.style.backgroundImage= "radial-gradient(circle at 80% 70%, red 1%, transparent 10%), " + "radial-gradient(circle at 90% 20%, yellow 1%, transparent 10%), " + "radial-gradient(circle at 20% 20%, green 1%, transparent 20%), " + "radial-gradient(circle at 50% 70%, blue 1%, transparent 30%), " + "radial-gradient(circle at 10% 80%, pink 0.1%, transparent 15%)";
    txtClock.style.right = "0";
    txtClock.style.left = "0";
    txtClock.style.top = "12%";
    txtClock.style.paddingTop = "13%";
    txtClock.style.margin = "0 auto";
    txtClock.style.width = "70%";
    txtClock.style.height = "50%";
    txtClock.style.borderRadius = "30px";
    txtClock.style.fontSize = "10vw";
    txtClock.style.fontFamily = "Arial, sans-serif";
    txtClock.style.textAlign = "center";
    txtClock.style.backgroundColor = "purple";
    txtClock.style.color = "white";
}
styleClock();



// media query for mobile
function mediaQuery() {
  var txtClock = document.getElementById("txtClock");

  if (window.matchMedia("(max-width: 414px)").matches) {
    document.getElementById("txtClock");
    txtClock.style.width = "95%";
    txtClock.style.height = "auto";
    txtClock.style.top = "160px";
    txtClock.style.paddingTop = "30px";
    txtClock.style.paddingBottom = "30px";
    txtClock.style.fontSize = "15vw";
  }    
}
mediaQuery();
window.addEventListener('resize', mediaQuery);



// analog clock
function moveAnalog() {
  const hourAnalog = document.getElementById("hour");
  const minuteAnalog = document.getElementById("minute");
  const secondAnalog = document.getElementById("second");

  setInterval(() => {
    const now = new Date();
    const hours = now.getHours() % 12; // 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 11) + (0.5 * minutes); // 1 hour = 30 degrees, 1 minute = 0.5 degree
    const minuteDeg = (minutes * 7) + (0.1 * seconds); // 1 minute = 6 degrees, 1 second = 0.1 degree
    const secondDeg = seconds * 6; // 1 second = 6 degrees

    hourAnalog.style.transform = `rotate(${hourDeg}deg)`;
    minuteAnalog.style.transform = `rotate(${minuteDeg}deg)`;
    secondAnalog.style.transform = `rotate(${secondDeg}deg)`;
  }, 1000);
}
moveAnalog();



// style
function styleAnalog() {
  var analogClock = document.getElementById("analogClock");
  analogClock.style.marginLeft = "43%";
  analogClock.style.marginTop = "7%";
  var analog = document.getElementsByClassName("analog");
  for (var i = 0; i < analog.length; i++) {
    analog[i].style.marginLeft = "50%";
    analog[i].style.marginTop = "15%";
  }
}
styleAnalog();






    


















    

    






    





    






