import JobsCatalogue from './jobs-catalogue';
import JobsFilter from './jobs-filter';
import JobsService from './jobs-catalogue/jobs-service';


export default class JobsPage {
  constructor({element}) {
    this._element = element;

    this._initCatalogue();
    this._initFilter();
  }

  _initCatalogue() {
    this._jobsCatalogue = new JobsCatalogue({
      element: document.querySelector('[data-component="jobs-catalogue"]')
    });

    this._showJobs();
  }

  _initFilter() {
    this._jobsFilter = new JobsFilter({
      element: document.querySelector('[data-component="jobs-filter"]')
    });

    JobsService.getFilters()
      .then(filterData => this._jobsFilter.showFilter(filterData));

    // send request to server
    this._jobsFilter.on(
      'filterSelected',
      event => {
        let filterFormData = event.detail;

        this._showJobs(filterFormData);
      }
    );
  }

  _showJobs(filterFormData) {
    JobsService.getJobs(filterFormData)
      .then(jobsData => this._jobsCatalogue.showJobs(jobsData.posts));
  }
}
