function ClickHello() {
    alert("omg a new message?! how cool!!!");
}

const targetDate = new Date("2026-08-29T08:30:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "It's Sunbeam Austin day!!";
        clearInterval(timerInterval);
        return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();