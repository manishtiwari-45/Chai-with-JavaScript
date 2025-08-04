const date = document.getElementById('clock');


setInterval(function(){
    let D = new Date();
    date.innerHTML = D.toLocaleTimeString(),1000
})