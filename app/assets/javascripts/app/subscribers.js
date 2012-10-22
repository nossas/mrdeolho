function Subscribers($scope) {
  
  $scope.video = "http://www.youtube.com/embed/K0XQ1JCf3e0?autoplay=1&wmode=transparent&rel=0"
  
  $scope.openVideo = function(videoUrl) {
    event.preventDefault();
    $.colorbox({ iframe: true, href: videoUrl, width: "55%", height: "65%" });
  }
      
}
