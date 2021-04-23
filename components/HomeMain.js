import Article from './Article';

export default function component({
  articles,
}) {
  const element = document.createElement('main');

  element.innerHTML = `
    <main>
      <div class="container-fluid">
        <div class="my-5 p-2 articles-container d-flex align-items-center justify-content-center flex-wrap">
          ${Article(articles[0]).outerHTML}
          ${Article(articles[1]).outerHTML}
          ${Article(articles[2]).outerHTML}
          ${Article(articles[0]).outerHTML}
          ${Article(articles[1]).outerHTML}
          ${Article(articles[2]).outerHTML}
        </div>
      </div>
    </main>
  `;

  return element;
}