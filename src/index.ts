import { menuList } from './data';
import { generateMenu } from './menu';
import './styles.css';

const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenu.innerHTML = generateMenu(menuList);
navMenu.addEventListener('click', (e: MouseEvent) => {
    const el: HTMLElement = e.target as HTMLElement;
    if (!el.classList.contains('title')) {
        return;
    }
    const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle('menu-open');
});


const input = document.querySelector('input') as HTMLInputElement;

input.addEventListener('input', (e: Event) => {
    console.log((e.target as HTMLInputElement).value);
})
