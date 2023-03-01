export default function contact() {
    const element = document.createElement('div');
    const hours = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    const address = document.createElement('p');

    element.classList.add('contact-box');

    hours.innerHTML = "Open Hour:<br>10:00 - 16:00";
    phone.innerHTML = "Call Us:<br>088-352-3673";
    email.innerHTML = "Write Us:<br>the.moment@email.com";
    address.innerHTML = "Visit Us:<br>9555 Mitchell Falls, Greenfort"

    element.appendChild(hours);
    element.appendChild(phone);
    element.appendChild(email);
    element.appendChild(address);

    return element;
}