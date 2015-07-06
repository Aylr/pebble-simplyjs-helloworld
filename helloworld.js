simply.title('Sprinklers!');
simply.body("0 Front 0 Backyard 0 Parking * Side Yard > More");

simply.on('singleClick', function(e) {
  simply.subtitle('You pressed the ' + e.button + ' button!');
});
