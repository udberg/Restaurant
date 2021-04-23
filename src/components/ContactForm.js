import '../assets/contact.scss';


export default function component() {
  const element = document.createElement('form');
  element.className = 'mx-auto shadow rounded my-5 p-5';

  element.innerHTML = `
    <div class="container-fluid my-5">
      <div class="form-group">
        <label for="fullname">Full name</label>
        <input type="email" class="form-control" id="fullname" aria-describedby="emailHelp" placeholder="Enter full name">
        <small id="emailHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
      <label for="message">Email address</label>
      <textarea class="form-control" id="message" placeholder="Enter message">
      </textarea>
    </div>
      <button type="submit" class="btn btn-info d-block mx-auto">Submit</button>
    </div>
  `;

  return element;
}