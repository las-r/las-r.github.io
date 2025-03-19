// Time Script
function showTime() {
    document.getElementById('time').innerHTML = Date()
}
setInterval(showTime, 500);