export default function component(title) {
  const element = document.createElement('article');

  element.innerHTML = `
    <article class="px-3 py-4 shadow-sm m-2">
      <h3 class="article-header text-center my-2">${title}</h3>
      <p class="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      <button class="btn btn-lg btn-info mx-auto d-block my-2">Book a table</button>
    </article>
  `;

  return element;
}