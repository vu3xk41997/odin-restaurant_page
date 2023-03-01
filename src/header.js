export function header(){
    const element = document.createElement('div');
    const list = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    element.classList.add('header');

    menu.setAttribute('id', 'menu');
    home.setAttribute('id', 'home');
    contact.setAttribute('id', 'contact');

    home.innerHTML = "Home";
    menu.innerHTML = "Menu";
    contact.innerHTML = "Contact";

    list.appendChild(home);
    list.appendChild(menu);
    list.appendChild(contact);

    element.appendChild(list);

    return element;
}