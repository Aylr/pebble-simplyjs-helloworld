simply.fullscreen(true);

simply.title('Sprinklers!');


simply.body("0 Front 0 Backyard 0 Parking * Side Yard > More");

simply.on('singleClick', function(e) {
  simply.body('You pressed the ' + e.button + ' button!');

  if (e.button == "down") {
  	ajax({ url: 'https://api.ipify.org' }, function(data){
	  var headline = data;
	  simply.title(headline);
	});
  } else if (e.button == "up"){
  	simply.body("");
    simply.title("");
    simply.subtitle("");
  }
});
