export default class PinterestService {
  static getFeedData(username) {
    return fetch('https://api.rss2json.com/v1/api.json?rss_url='
      + encodeURIComponent(`https://www.pinterest.com/${encodeURIComponent(username)}/feed.rss/`))
      .then(
        PinterestService._checkStatus,
        err => {
          console.error(err);
          return err;
        }
      ).then(
        response => {
          if (response instanceof TypeError) {
            return response;
          }

          return response.json();

        }
      ).then(parsed => {
        if (parsed.status === 'ok') {
          return parsed;
        }

        return new TypeError(parsed.status + ' ' + parsed.message);
      });
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
