class RequestService {
  constructor() {
    this.url = '';
  }

  initUrl(value) {
    this.url = `/${value}`;
    return this;
  }

  limit(limit) {
    this.url += this.addConnector(this.url);
    this.url += `_limit=${limit}`;

    return this;
  }

  orderBy(param) {
    this.url += this.addConnector(this.url);
    this.url += `_sort=${param}`;

    return this;
  }

  orderDir(direction) {
    let validDirections = ['asc', 'desc'];
    direction = validDirections.indexOf(direction) > -1 ? direction : 'asc';

    this.url += this.addConnector(this.url);
    this.url += `_order=${direction}`;

    return this;
  }

  getUrl() {
    return this.url;
  }

  addConnector(url) {
    return url.indexOf('?') > -1 ? '&' : '?';
  }
}
/* @ngInject */
export default RequestService;
