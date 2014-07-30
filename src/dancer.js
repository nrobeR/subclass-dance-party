// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

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
  var selfTop = parseInt(this.$node.css('top'));
  var selfLeft = parseInt(this.$node.css('left'));
  var targetTop = parseInt(target.$node.css('top'));
  var targetLeft = parseInt(target.$node.css('left'));
  var t = selfTop-targetTop;
  var l = selfLeft-targetLeft;
  var result = Math.sqrt(t*t+l*l);
  // var result = Math.sqrt((selfTop - targetTop)*(selfTop - targetTop) + (selfLeft - targetLeft)*(selfLeft - targetLeft));
  return result;
}

Dancer.prototype.findClosest = function(list, n) {
  //iterate through list and find length between self and each target in the list
  var distanceList = [];
  var result = [];
  for(var i = 0; i < list.length; i++) {
    distanceList.push([list[i],this.findDistance(list[i])]);
  }
  distanceList.sort(function(a,b){return a[1]-b[1];});
  //save all the lengths and targets in array
  //sort the array base on length
  //return the first n elements of the array
  for(var j = 0; j < distanceList.length;j++){
    result.push(distanceList[j][0]);
  }
  return result.splice(0,n);
}
