function ClickHello() {
    alert("omg a new message?! how cool!!!");
}

function showTime() {
 const time = new Date();
 let hours = time.getHours();
 let minutes = time.getMinutes();
 let seconds = time.getSeconds();
 const amPm = hours >= 12 ? "PM" : "AM";
 hours = hours % 12 || 12;
 hours = hours < 10 ? "0" + hours : hours;
 minutes = minutes < 10 ? "0" + minutes : minutes;
 seconds = seconds < 10 ? "0" + seconds : seconds;
 const currentTime = `${hours}:${minutes}:${seconds} ${amPm}`;
 document.getElementById("clock").innerText = currentTime;
}
setInterval(showTime, 1000);
showTime();