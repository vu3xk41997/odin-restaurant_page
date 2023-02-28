import './style.css';
// import Background from './background.jpg';

// function background() {
    // const element = document.getElementById('content');
    
    // element.classList.add('background');

    // const myBackground = new Image();
    // myBackground.src = Background;
    // element.appendChild(myBackground);

    // return element;
// }
 
// document.body.appendChild(background());

function logo(){
    const element = document.createElement('H1');
    element.innerHTML = "The Place";
    return element;
}
document.getElementById('content').appendChild(logo());