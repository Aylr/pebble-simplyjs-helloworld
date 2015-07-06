simply.title('Sprinklers!');

simply.on('singleClick', function(e) {
  simply.subtitle('You pressed the ' + e.button + ' button!');
});

ajax({ url: 'http://arm.local:8080/api/status' }, function(data){
  simply.body(data);
});