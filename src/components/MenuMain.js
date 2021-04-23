export default function component() {
  const element = document.createElement('div');
  element.className = 'container-fluid';

  element.innerHTML = `
  <table class="table table-hover mx-auto shadow rounded my-5">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Item</th>
        <th scope="col">Igredients</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Pizza Salami</td>
        <td>Salami, Cheese, Ketchup</td>
        <td>$1.99</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Pasta</td>
        <td>Pasta, Cheese, Olives</td>
        <td>$2.99</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>French Fries</td>
        <td>Curly Fried with Cheese</td>
        <td>$0.99</td>
      </tr>
      <tr>
      <th scope="row">1</th>
      <td>Pizza Salami</td>
      <td>Salami, Cheese, Ketchup</td>
      <td>$1.99</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Pasta</td>
      <td>Pasta, Cheese, Olives</td>
      <td>$2.99</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>French Fries</td>
      <td>Curly Fried with Cheese</td>
      <td>$0.99</td>
    </tr>
      <tr>
        <th scope="row">1</th>
        <td>Pizza Salami</td>
        <td>Salami, Cheese, Ketchup</td>
        <td>$1.99</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Pasta</td>
        <td>Pasta, Cheese, Olives</td>
        <td>$2.99</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>French Fries</td>
        <td>Curly Fried with Cheese</td>
        <td>$0.99</td>
      </tr>
    </tbody>
  </table>
  `;

  return element;
}