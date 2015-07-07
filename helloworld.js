var url = "http://10.0.1.22:8080/api/status"


simply.fullscreen(true);

simply.title('Sprinklers!');


simply.body("Press Up to turn on, down off");

simply.on('singleClick', function(e) {
    simply.body('Fetching API request ' + e.button + ' button!');

    if (e.button == "down") {
        // ajax({ url: url }, function(data){
        // var headline = data;
        // simply.body(headline);

        simply.body("");
        simply.title("Station 4 Off");
        simply.subtitle("");

        ajax({
                url: "10.0.1.22:8080/sn?pw=opendoor&sid=4&set_to=0"
            },
            function(data) {
                simply.body(data);
            });
    } else if (e.button == "up") {
        simply.body("");
        simply.title("Station 4 On");
        simply.subtitle("");

        ajax({
            url: "10.0.1.22:8080/sn?pw=opendoor&sid=4&set_to=1"
        }, function(data) {
            simply.body(data);
        });
    }
});