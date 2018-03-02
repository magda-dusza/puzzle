import LevelController from './level.controller';

describe('Level Controller', function() {
  let controller;
  let UserService = {
    pictureName: {kotel: 'kotel1'}
  };

  beforeEach(function() {
    controller = new LevelController(UserService);
  });

  it('should make second active', function() {
    //given
    //when
    controller.makeActive(1);
    //then
    expect(controller.active[0]).toBe(false);
    expect(controller.active[2]).toBe(false);
    expect(controller.active[1]).toBe(true);
    expect(controller.pictureName.kotel).toBe('kotel2');
  });

  it('should return object for ng-class', function() {
    //given
    let expected1 = {'active': true};
    let expected2 = {'active': false};
    //when
    let isFirstActive = controller.isActive(0);
    let isSecondActive = controller.isActive(1);
    //then
    expect(isFirstActive).toEqual(expected1);
    expect(isSecondActive).toEqual(expected2);
  });

  it('should return object for ng-class after change', function() {
    //given
    let expected1 = {'active': false};
    let expected2 = {'active': true};
    controller.makeActive(1);
    //when
    let isFirstActive = controller.isActive(0);
    let isSecondActive = controller.isActive(1);
    //then
    expect(isFirstActive).toEqual(expected1);
    expect(isSecondActive).toEqual(expected2);
  });
});
