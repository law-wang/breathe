window.onload = function showTime(){
    var x = new Date();
    var hours = (x.getHours() < 10? '0' : '') + x.getHours();
    var minutes = (x.getMinutes() < 10? '0' : '') + x.getMinutes();
    var seconds = (x.getSeconds() < 10? '0' : '') + x.getSeconds();
    var time = hours + ":" +  minutes + ":" +  seconds;
    document.getElementById('ct').innerHTML = time;
    setTimeout(showTime, 1000);
}
