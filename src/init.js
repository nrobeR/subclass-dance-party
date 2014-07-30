$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random()-100,
      $("body").width() * Math.random()-100,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.$node.on('mouseover', function(event) {
      // alert('hello');
      $(this).css({borderColor:'red'});
    });
  });

  $(".lineUp").on('click',function(event){
    for(var i = 0; i < window.dancers.length;i++){
        window.dancers[i].lineup(20);
    }
  })
  $(".addHardDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // debugger;
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    debugger;

    // var dancer = new dancerMakerFunction(1000,1000,1000);

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.$node.on('mouseover',function(event){
      $(this).css({borderColor:'red'});
    })
  });

  // debugger;
  $(".mingle").on("click",function(event){
    var copy = window.dancers.slice(0);
    // debugger;
    // console.log(window.dancers[0].findDistance(window.dancers[1]));
    // console.log(window.dancers[0].findClosest(window.dancers,3));
    for(var i = 0; i < window.dancers.length; i++){
      var origin = window.dancers[i];
      copy.splice(i,1);
      var group = origin.findClosest(copy,3);
      var origin_top = origin.$node.css('top');
      var origin_left = origin.$node.css('left');
      // console.log(group);
      var x = Math.round(0xffff*Math.random()).toString(16);
      var y = (6-x.length);
      var z = "000000";
      var z1 = z.substring(0,y);
      var color = "#" + z1 + x;
      origin.$node.css({borderColor:color});
      for(var k = 0; k < group.length; k++){
        var t = parseInt(origin_top)+Math.random()*100-50;
        var l = parseInt(origin_left)+Math.random()*100-50;
        group[k].$node.css({top:t});
        group[k].$node.css({left:l});
        // group[k].$node.css({top:origin_top+Math.random()*10-5});
        // group[k].$node.css({top:50});
        // group[k].setPosition(origin_top+Math.random()*10-5,origin_left+Math.random()*10-5);
        // debugger;
        // var colorSettings = {
        //   border:10px solid green;
        // }
        // group[k].$node.css({borderColor:color});
        // debugger;
      }
    }
  })



});

