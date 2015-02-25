$(document).ready(function(){
 
  function makeNewPosition(){
      
      // Get viewport dimensions (remove the dimension of the div)
      var h = $(window).height() - 50;
      var w = $(window).width() - 50;
      
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      
      return [nh,nw];    
      
  }
  
  var newq = makeNewPosition();

  setInterval(function(){
    newq = makeNewPosition();
    $('.apply').animate({ top: newq[0], left: newq[1] });
  }, 700)

  $('.apply').on('mouseenter', function(){
    newq = makeNewPosition();
    $(this).addClass('smaller');
    $(this).animate({ top: newq[0], left: newq[1] }, 100)
    setTimeout(function(){
      $('.apply').removeClass('smaller');
    }, 1000)
  })

});
