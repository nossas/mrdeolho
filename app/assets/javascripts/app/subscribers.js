function Subscribers($scope, $http) {
  
  $scope.video = "http://www.youtube.com/embed/K0XQ1JCf3e0?autoplay=1&wmode=transparent&rel=0"
  
  $scope.openVideo = function(videoUrl) {
    event.preventDefault();
    $.colorbox({ iframe: true, href: videoUrl, width: "55%", height: "65%" });
  }
      
}

Subscribers.$inject = ['$scope', '$http'];


(!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=177910022269006";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
