import JobsPage from './jobs-page';

require('./lib/chosen.jquery.js');
$('select').chosen();

export let jobsCatalogue = new JobsPage();
