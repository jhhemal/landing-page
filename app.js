const timeEl = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const body = document.body;

// console.log(name.textContent);

setInterval(updateTime, 1000);

getName();
getFocus();

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

function setName(e){
    if(e.type === 'keypress'){
        if(e.keyCode === 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
       localStorage.setItem('name', e.target.innerText);
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
        if(e.keyCode === 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
       localStorage.setItem('focus', e.target.innerText);
    }
}

function updateTime(){
    const time = new Date();
    timeEl.textContent = time.toLocaleTimeString();
    const hours = time.getHours();
    setBgGreet(hours);
}

function setBgGreet(hours){
    if(hours < 12 && hours > 6){
        greeting.textContent = 'Good Morning'
        body.style.backgroundImage = "url('images/morning.jpg')";
    }else if(hours < 18 && hours > 12){
        greeting.textContent = 'Good Afternoon'
        body.style.backgroundImage = "url('images/afternoon.jpg')";
    }else{
        greeting.textContent = 'Good Night'
        body.style.backgroundImage = "url('images/night.jpg')";
        body.style.color = "#fff";
    }
}

function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}