import JobsService from './jobs-service';

export default class JobsCatalogue {
  constructor({element}) {
    this._element = element;
    this._render();
  }

  _render() {
    const jobs = JobsService.getJobs().posts;
    let itemsHTML = '';

    jobs.forEach(job => {
      itemsHTML += `
        <li class="job-item">
          <h4 class="job-item__title"><a href="#">${job.name}</a></h4>
          <ul class="job-item__options"> ${getOptionsHTML(job.options)}</ul>
          <p class="job-item__description">${job.description}... <a href="#">more</a></p>

          <ul class="job-item__options">
            <li class="job-item__option-item">
              <span>Category: </span> ${job.category}
            </li>
            <li class="job-item__option-item">
              <span>Skills:</span>
              <ul class="job-item__skills">
                ${job.skills.map(item => `<li class="job-item__skills-item">${item.name}</li>`).join('')}
              </ul>
            </li>
          </ul>

          <ul class="job-item__options">
            <li class="job-item__option-item">
              <span>Country: </span> ${job.client.country}
            </li>
            <li class="job-item__option-item">
              ${job.client.rating}
              <span class="job-item__stars">
                <span class="job-item__stars_marked">
                ${'★'.repeat(Math.floor(job.client.rating))
                  + '</span>'
                  + '★'.repeat(5 - Math.floor(job.client.rating))}
              </span>
            </li>
          </ul>
        </li>
      `;
    });

    this._elem.innerHTML = `<ul class="jobs-catalogue">${itemsHTML}</ul>`;

    function getOptionsHTML(options) {
      let html = '';
      let optionsNames = ['fixed', 'budget', 'delivery', 'posted', 'ends', 'proposals'];

      for (const option of optionsNames) {
        let optionName = option[0].toUpperCase() + option.slice(1);

        html += '<li class="job-item__option-item">';
        if (option !== 'proposals') {
          html += `<span>${optionName} :</span> ${options[option]}`;
        } else {
          html += `<a href="#">${options[option]} ${optionName}</a>`;
        }

        html += '</li>';
      }

      return html;
    }
  }
}
