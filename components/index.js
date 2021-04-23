import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import HomeMain from './components/HomeMain';
import MenuMain from './components/MenuMain';
import ContactForm from './components/ContactForm';

const state = {
  articles: ['Cheap prices', 'Michelin Stars', 'Takeaway'],
  header: {
    title: 'Welcome to the Microverse Restaurant',
    subtitle: 'A place where you will always want to come back',
  },
};

function component(state) {
  const element = document.createElement('div');

  element.innerHTML = `
    ${Nav().outerHTML}

    ${Header(state).outerHTML}

    <div id="main-content">
      ${HomeMain(state).outerHTML}
    </div>

    ${Footer().outerHTML}
  `;

  return element;
}

document.querySelector('#content').appendChild(component(state));


function getElement(string, state) {
  switch (string) {
    case 'Menu':
      return MenuMain();
    case 'Contact':
      return ContactForm();
    default:
      return HomeMain(state);
  }
}

function switchTab(e, state) {
  e.preventDefault();
  const element = document.createElement('div');
  element.appendChild(getElement(e.target.textContent, state));

  document.querySelector('#main-content').innerHTML = '';
  document.querySelector('#main-content').appendChild(element);

  document.querySelectorAll('.nav-link.active').forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');
}

function addListeners(state) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(tab => tab.addEventListener('click', (e) => switchTab(e, state)));
}

addListeners(state);