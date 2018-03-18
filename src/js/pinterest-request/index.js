import PinterestService from './pinterest-request-service';

export default class PinterestRequest {
  constructor({element}) {
    this._element = element;
    this._render();
    this._response = this._element.querySelector('[data-element="pinterest-response"]');

    this._element.addEventListener('submit', this._submitHandler.bind(this));
  }

  _render() {
    this._element.innerHTML = `
      <form name="pinterest-request">
        <h3>Pinterest request</h3>
        <input type="text" name="username" />
        <input type="submit" value="Send">
      </form>
      <p data-element="pinterest-response"></p>
    `;
  }

  _submitHandler(event) {
    event.preventDefault();
    let username = event.target.elements.username.value;

    PinterestService.getFeedData(username)
      .then(response => {
        if (response instanceof TypeError) {
          return 'Ошибка получения данных';
        }

        return `
          <ul>
            <li>Title - ${response.querySelector('channel title').textContent}</li>
            <li>Link - ${response.querySelector('channel link').textContent}</li>
            <li>Description - ${response.querySelector('channel description').textContent}</li>
          </ul>
        `;

      }).then(html => {
        this._response.innerHTML = html;
      });
  }
}
