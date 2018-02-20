class ScoresService {
  constructor(API_URL, $resource) {
    this.API_URL = API_URL;
    this.resource = $resource;
    this.scores = {list : []};
  }

  getAllScores() {
    this.resource(this.API_URL + '/scores')
    .query((response) => {
      this.scores.list = response;
    });
  }

}
/* @ngInject */
export default ScoresService;