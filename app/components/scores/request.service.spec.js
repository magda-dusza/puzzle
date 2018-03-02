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

  it('should create request to abc with sorting', function() {
    //given
    let prop = 'test';
    let direction = 'asc';
    let result = '/scores?_sort='+prop+'&_order='+direction;
    //when
    let request = service.initUrl('scores').orderBy(prop).orderDir(direction).getUrl();
    //then
    expect(request).toEqual(result);
  });

  it('should get default direction if mistake', function() {
    //given
    let prop = 'test';
    let direction = 'aaa';
    let expectedDirection = 'asc';
    let result = '/scores?_sort='+prop+'&_order='+expectedDirection;
    //when
    let request = service.initUrl('scores').orderBy(prop).orderDir(direction).getUrl();
    //then
    expect(request).toEqual(result);
  });

  it('should create request with sort and limit', function() {
    //given
    let limit = 10;
    let prop = 'test';
    let direction = 'desc';
    let result = '/scores?_sort='+prop+'&_order='+direction+'&_limit='+limit;
    //when
    let request = service.initUrl('scores').orderBy(prop).orderDir(direction).limit(limit).getUrl();
    //then
    expect(request).toEqual(result);
  });
});
