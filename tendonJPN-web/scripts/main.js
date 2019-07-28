let myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/food_tendon.png') {
        myImage.setAttribute('src', 'images/tendon_ebi.png');
    }
    else {
        myImage.setAttribute('src', 'images/food_tendon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Tendon is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Tendon is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}