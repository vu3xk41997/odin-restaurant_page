export default function container(){
    const element = document.createElement('div');
    const logo = document.createElement('h1');
    const slogan = document.createElement('h2');

    element.classList.add('container');

    logo.innerHTML = "The Moment";
    slogan.innerHTML = "Take a break and enjoy the moment";

    element.appendChild(logo);
    element.appendChild(slogan);

    return element;
}