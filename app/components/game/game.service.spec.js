import GameService from './game.service';

describe('Game Service', function(){
  let service;
  let API_URL = 'api-url',
      resource = jasmine.createSpy('resource').and.callFake(function() {
        return {
          save: jasmine.createSpy('save')
        }
      }),
      state = {
        go: jasmine.createSpy('go')
      };

  beforeEach(function(){
    service = new GameService(API_URL, resource, state);
  });

  it('should init game', function() {
    //given
    service.finalScore.result = 1200;
    service.seconds.value = 123;
    service.mistakes.value = 2;
    //when
    service.initGame();
    //then
    expect(service.finalScore.result).toBe(1500);
    expect(service.seconds.value).toBe(0);
    expect(service.mistakes.value).toBe(0);
  });

  it('should get final score value', function() {
    //given
    service.seconds.value = 35;
    service.mistakes.value = 2;
    let expected = 1000;
    //when
    service.calcScore();
    //then
    expect(service.finalScore.result).toBe(expected);
  });

  it('should save result', function() {
    //given
    let userName = {value: 'test'};
    let score = 1000;
    let url = '/scores'
    //when
    service.saveScore(userName, score);
    //then
    expect(resource).toHaveBeenCalled();
    expect(resource).toHaveBeenCalledWith(API_URL+url);
  });
});
