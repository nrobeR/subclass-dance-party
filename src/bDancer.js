var HardDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="harddancer"></span>');
};

  HardDancer.prototype = Object.create(Dancer.prototype);
  HardDancer.prototype.constructor = HardDancer;
  HardDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.slideIn();
}

