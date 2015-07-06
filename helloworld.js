simply.title('Hello World!');

simply.on('singleClick', function(e) {
  simply.subtitle('You pressed the ' + e.button + ' button!');
});

ajax({ url: 'http://arm.local:8080/api/status' }, function(data){
  var body = data;
  simply.body(body);
});