export default function menu() {
    const element = document.createElement('div');
    const item_1 = document.createElement('p');
    const item_2 = document.createElement('p');
    const item_3 = document.createElement('p');
    const item_4 = document.createElement('p');
    const item_5 = document.createElement('p');
    const item_6 = document.createElement('p');
    const item_7 = document.createElement('p');
    element.classList.add('menu-box');

    item_1.innerHTML = "<span>Pancake</span><span>50</span>";
    item_2.innerHTML = "<span>Muffin</span><span>35</span>";
    item_3.innerHTML = "<span>Cheese Cake</span><span>35</span>";
    item_4.innerHTML = "<span>Lemon Tart</span><span>35</span>";
    item_5.innerHTML = "<span>Ice Latte</span><span>50</span>";
    item_6.innerHTML = "<span>Espresso</span><span>50</span>";
    item_7.innerHTML = "<span>Sparkling Water</span><span>30</span>";

    element.appendChild(item_1);
    element.appendChild(item_2);
    element.appendChild(item_3);
    element.appendChild(item_4);
    element.appendChild(item_5);
    element.appendChild(item_6);
    element.appendChild(item_7);

    return element
}