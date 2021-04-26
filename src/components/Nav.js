export default function component() {
  const element = document.createElement('nav');

  element.innerHTML = `
  <nav>
    <ul class="nav nav-pills justify-content-center p-1">
      <li class="nav-item"><a href="#" class="nav-link text-white py-1 active">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link text-white py-1">Menu</a></li>
      <li class="nav-item"><a href="#" class="nav-link text-white py-1">Contact</a></li>
    </ul>
  </nav>
`;

  return element;
}