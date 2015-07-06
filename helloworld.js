simply.title('Sprinklers!');
simply.body("0 Front\n
0 Backyard\n
0 Parking\n
* Side Yard\n
> More");

simply.on('singleClick', function(e) {
  simply.subtitle('You pressed the ' + e.button + ' button!');
});