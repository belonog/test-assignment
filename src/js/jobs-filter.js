import JobsService from './jobs-catalogue/jobs-service.js';
import Component from './component.js';

export default class JobsFilter extends Component {
  constructor({element}) {
    super(element);

    require('./lib/chosen.jquery.js');

    element.addEventListener('change', e => {
      let formData = new FormData(e.target.form);

      this._trigger('filterSelected', formData);
    });
  }

  showFilter(filtres) {
    this._filters = filtres;
    this._render();

    $(this._element.querySelectorAll('select')).chosen();

  }

  _render() {
    let filters = this._filters;

    this._element.innerHTML = `
      <form name="filter" action="/">
        <section class="filter__category" data-element="category">
          <h4 class="filter__title">Choise Category</h4>
          <select class="filter__category-select" name="category">
            ${ filters.category.map(item => `
                <option value="${item.id}">${item.name}</option>
              `).join('')}
          </select>
        </section>
        <section class="filter__subcategory" data-element="subcategory">
          <h4 class="filter__title">Choise Subcategory</h4>
          ${filters.subcategory.map(item => `
            <input id="filter__subcat-checkbox${item.id}"
                   type="checkbox"
                   name="subcategory"
                   value="${item.id}" ${item.checked ? 'checked' : ''}>
            <label for="filter__subcat-checkbox${item.id}"
                   class="filter__subcat-checkbox">
              ${item.name}
            </label>
          `).join('')}
        </section>
        <section class="filter__raiting" data-element="raiting">
          <h4 class="filter__title">Client Rating</h4>
          ${filters.raiting.map(item => `
            <input type="${item.checkbox ? 'checkbox' : 'radio'}"
                   id="filter__raiting${item.id}"
                   name="raiting"
                   ${item.id === 0 ? 'checked' : ''}
                   value="${item.id}">
            <label class="filter__rating-${item.checkbox ? 'checkbox' : 'radio'}"
                   for="filter__raiting${item.id}">
              ${item.name}
            </label>
          `).join('')}
        </section>
        <section class="filter__budget" data-element="budget">
          <h4 class="filter__title">Budget</h4>
          <select class="filter__budget-select" name="category">
            ${ filters.budget.map(item => `
                <option value="${item.id}">${item.name}</option>
              `).join('')}
          </select>
        </section>
        <section class="filter__delivery" data-element="delivery">
          <h4 class="filter__title">Delivery</h4>
          <select class="filter__delivery-select" name="delivery">
            ${ filters.delivery.map(item => `
                <option value="${item.id}">${item.name}</option>
              `).join('')}
          </select>
        </section>
        <section class="filter__location" data-element="location">
          <h4 class="filter__title">Location</h4>
          <select class="filter__location-select" name="location">
            ${ filters.location.map(item => `
                <option value="${item.id}">${item.name}</option>
              `).join('')}
          </select>
        </section>
      </form>
    `;
  }
}
