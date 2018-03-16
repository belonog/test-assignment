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

    let jobsPromise = JobsService.getJobs();

    jobsPromise.then(jobsData => this._jobsCatalogue.showJobs(jobsData.posts))
  }

  _initFilter() {
    this._jobsFilter = new JobsFilter({
      element: document.querySelector('[data-component="jobs-filter"]')
    });

    JobsService.getFilters()
      .then(filterData => this._jobsFilter.showFilter(filterData));

    // send request to server
    this._jobsFilter.on('filterSelected', event => console.log(Array.from(event.detail.entries())));
  }
}
