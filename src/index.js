import './style.css';
import container from './home';
import { header } from './header';
import menu from './menu';
import contact from './contact';

document.getElementById('content').appendChild(header()); // default display = flex
document.getElementById('content').appendChild(container()); // default display = flex
document.getElementById('content').appendChild(menu()); // default display = none
document.getElementById('content').appendChild(contact()); //default display = none

document.getElementById('home').addEventListener('click', function(event){
    document.getElementsByClassName('container')[0].style.display = "flex";
    document.getElementsByClassName('menu-box')[0].style.display = "none";
    document.getElementsByClassName('contact-box')[0].style.display = "none";
})

document.getElementById('menu').addEventListener('click', function(event){
    document.getElementsByClassName('container')[0].style.display = "none";
    document.getElementsByClassName('menu-box')[0].style.display = "flex";
    document.getElementsByClassName('contact-box')[0].style.display = "none";
})

document.getElementById('contact').addEventListener('click', function(event){
    document.getElementsByClassName('container')[0].style.display = "none";
    document.getElementsByClassName('menu-box')[0].style.display = "none";
    document.getElementsByClassName('contact-box')[0].style.display = "flex";
})