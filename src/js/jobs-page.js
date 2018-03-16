import JobsCatalogue from './jobs-catalogue';
import JobsFilter from './jobs-filter';


export default class JobsPage {
  constructor() {
    this._jobsCatalogue = new JobsCatalogue({
      element: document.querySelector('[data-component="jobs-catalogue"]')
    });

    this._jobsFilter = new JobsFilter({
      element: document.querySelector('[data-component="jobs-filter"]')
    });
    // send request to server
    this._jobsFilter.on('filterSelected', event => console.log(Array.from(event.detail.entries())));
  }
}
