export default function component({
  header: {
    title,
    subtitle,
  },
}) {
  const element = document.createElement('header');

  element.innerHTML = `
    <div class="container-fluid">
      <div class="showcase text-center d-flex flex-column align-items-center justify-content-center">
        <div class="showcase-text  rounded shadow">
          <h1>${title}</h1>
          <p class="h3">${subtitle}</p>
        </div>
      </div>
    </div>`;

  return element;
}