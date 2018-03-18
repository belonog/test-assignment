export default class PinterestService {
  static getFeedData(username) {
    return fetch(`https://cors.io/?https://www.pinterest.com/${encodeURIComponent(username)}/feed.rss/`)
      .then(PinterestService._checkStatus)
      .then(response => response.text())
      .then(xmlStr => (new DOMParser()).parseFromString(xmlStr, 'text/xml'))
      .catch(
        err => {
          console.error(err);
          return err;
        }
      );
  }

  static _checkStatus(response) {
    if (response.status < 400) {
      return response;
    }

    let error = new TypeError(response.status + ' ' + response.statusText);
    error.response = response;
    return error;
  }
}
