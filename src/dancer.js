// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // debugger;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  this.setPosition(top, left);

};

Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(){
  var self = this;
  // console.log(this);
  setTimeout(function(){self.step()}, self.timeBetweenSteps);
  //debugger;
}

Dancer.prototype.lineup = function(left) {

  this.setPosition(this.$node.css('top'), left);

}

Dancer.prototype.findDistance = function(target) {
  //find distance to all dancers from dancer
  var selfTop = this.$node.css('top');
  var selfLeft = this.$node.css('left');
  var targetTop = target.$node.css('top');
  var targetLeft = target.$node.css('left');
  return Math.sqrt((selfTop - targetTop)*(selfTop - targetTop) + (selfLeft - targetLeft)*(selfLeft - targetLeft));
}

Dancer.prototype.findClosest = function(list, n) {
  //iterate through list and find length between self and each target in the list
  var distanceList = [];
  for(var i = 0; i < list.length; i++) {
    distanceList.push([list[i],this.findDistance(list[i])]);
  }
  distanceList.sort(function(){return a[1]-b[1];});
  //save all the lengths and targets in array
  //sort the array base on length
  //return the first n elements of the array
  return distanceList.splice(0,n);
}
