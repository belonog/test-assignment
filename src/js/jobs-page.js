import JobsCatalogue from './jobs-catalogue';

export default class JobsPage {
  constructor() {
    this._jobsCatalogue = new JobsCatalogue(document.querySelector('[data-component="jobs-catalogue"]'));
  }
}
