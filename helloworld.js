simply.fullscreen(true);

simply.title('Sprinklers!');

simply.body("0 Front 0 Backyard 0 Parking * Side Yard > More");

simply.on('singleClick', function(e) {
  simply.body('You pressed the ' + e.button + ' button!');

  if (e.button == "down") {
  	ajax({ url: 'http://simplyjs.io' }, function(data){
	  var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
	  simply.title(headline);
	});
  } else if (e.button == "up"){
  	simply.body("");
  }
});