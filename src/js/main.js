//dom elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
//options 
const showAmPm = true;

//show time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //set am or pm
    const amPM = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    //Output time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPM : ''}`;
    setTimeout(showTime, 1000);

}

//add zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
//set background and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('//images.unsplash.com/photo-1491929007750-dce8ba76e610?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        greeting.textContent = "Good Morning";

    } else if (hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('//images.unsplash.com/photo-1471286274405-579f8d7132d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        
        greeting.textContent = "Good Afternoon";
    } else {
        //evening
        document.body.style.backgroundImage = "url('//images.unsplash.com/photo-1556300936-2d1a21a92ea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = "Good Evening";
        document.body.style.color = 'white';
    }
}
//set name
function setName(e) {
    if(e.type === 'keypress') {
        //make sure is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
} 
//set focus
function setFocus(e) {
    if(e.type === 'keypress') {
        //make sure is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
} 
// get name 
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
// get name 
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//run
showTime();
setBgGreet();
getName();
getFocus();

