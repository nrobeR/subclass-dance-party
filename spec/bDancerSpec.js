describe("HardDancer", function() {

  var hardDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hardDancer = new HardDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(hardDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(hardDancer.$node, 'fadeOut');
    hardDancer.step();
    expect(hardDancer.$node.fadeOut.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      // debugger;
      sinon.spy(hardDancer, "step");
      expect(hardDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(hardDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hardDancer.step.callCount).to.be.equal(2);
    });
  });
});
