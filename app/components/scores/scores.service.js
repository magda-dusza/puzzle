class ScoresService {
  constructor(API_URL, $resource, RequestService) {
    this.API_URL = API_URL;
    this.resource = $resource;
    this.RequestService = RequestService;
    this.scores = {list : []};
    this.url = '';
  }

  getTop10Scores() {
    let reqUrl = this.RequestService.initUrl('scores')
                     .limit(10)
                     .orderBy('score')
                     .orderDir('desc')
                     .getUrl();
    this.resource(this.API_URL + reqUrl)
        .query((response) => {
          this.scores.list = response;
        });
  }
}
/* @ngInject */
export default ScoresService;
