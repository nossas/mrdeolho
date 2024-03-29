function Subscribers($scope, $element, $http) {



  $scope.video = "http://www.youtube.com/embed/K0XQ1JCf3e0?autoplay=1&wmode=transparent&rel=0"
  $scope.form  = $element.find('form');


  $scope.openVideo = function(event) {
    event.preventDefault();
    $.colorbox({ iframe: true, href: $(event.currentTarget).prop('href') , width: "55%", height: "65%" });
  };

  $scope.showBox = function(href) {
    event.preventDefault();
    $.colorbox({href: href, inline: true, width: "50%", height: "60%"});
  }
  
  $($element).on('click', '.video .sub a', $scope.openVideo);
  $($element).on('click', '.about a.know_more', function(event) {
    $scope.showBox('#know_more')
  });

  $scope.subscribe = function(){
    event.preventDefault();
    $http.post('/subscribers', { email: $scope.email })
    .success(function(data) {
      $scope.showBox("#subscribe_success");
    })
    .error(function(data) {
      $scope.showBox("#subscribe_failure");
    });

  };

}

Subscribers.$inject = ['$scope', '$element', '$http'];


(!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


 (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
