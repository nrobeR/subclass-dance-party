describe("RockDancer", function() {

  var rockDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rockDancer = new RockDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rockDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(rockDancer.$node, 'slideDown');
    rockDancer.step();
    expect(rockDancer.$node.slideDown.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      // debugger;
      sinon.spy(rockDancer, "step");
      expect(rockDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(rockDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rockDancer.step.callCount).to.be.equal(2);
    });
  });
});
