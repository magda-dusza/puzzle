import GameController from './game.controller';
describe('Game Controller', function(){
  let controller;
  let UserService = {
    userName: {value: 'test'},
    pictureName: {kotel: 'kotel1'}
  },
  GameService = {
    initGame: jasmine.createSpy('initGame'),
    mistakes: {value : 0},
    seconds: {value: 0},
    positions: ['11', '12', '13'],
    finalScore: {value : 1100}
  },
  scope = {
    $apply: jasmine.createSpy('apply')
  };
  beforeEach(function(){
    controller = new GameController(scope, UserService, GameService);
  });

  it('should init Game', function() {
    //given
    //when
    controller.$onInit();
    //then
    expect(GameService.initGame).toHaveBeenCalled();
  });

  it('should match first element', function() {
    //given
    spyOn(controller, 'calcScore');
    //when
    controller.correct();
    //then
    expect(controller.elementsFit).toBe(1);
    expect(controller.calcScore).not.toHaveBeenCalled();

  });

  it('should end game', function() {
    //given
    controller.elementsFit = 8;
    spyOn(controller, 'calcScore');
    //when
    controller.correct();
    //then
    expect(controller.elementsFit).toBe(9);
    expect(controller.gameOver).toBe(true);
    expect(controller.confirmBox.visible).toBe(true);
    expect(controller.calcScore).toHaveBeenCalled();
    expect(scope.$apply).toHaveBeenCalled();
  });

  it('should increase mistakes value', function() {
    //given
    spyOn(controller, 'calcScore');
    //when
    controller.mistake();
    //then
    expect(controller.mistakes.value).toBe(1);
    expect(controller.calcScore).toHaveBeenCalled();
  });

  it('should get target value', function() {
    //given
    let index = 1;
    let expected = 't12';
    //when
    let result = controller.getTarget(index);
    //then
    expect(result).toBe(expected);
  });

  it('should get element value', function() {
    //given
    let index = 0;
    let expected = 'element11';
    //when
    let result = controller.getElement(index);
    //then
    expect(result).toBe(expected);
  });
});
