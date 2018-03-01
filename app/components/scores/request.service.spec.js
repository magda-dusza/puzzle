import RequestService from './request.service.js';

describe('Users factory', function() {
  let service;

  beforeEach(inject(function () {
    service = new RequestService();
  }));

  it('should have url property', function() {
    expect(service.url).toBeDefined();
  });

  it('should create request to scores with limit', function() {
    //given
    let result = "/scores?_limit=10";
    //when
    let request = service.initUrl('scores').limit(10).getUrl();
    //then
    expect(request).toEqual(result);
  });
});
