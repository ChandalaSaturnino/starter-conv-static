var fs = require('fs'),
  https = require('https');

fs.writeFile(__dirname + '/about.html', '<h1>HTML is great</h1>', function(
  error
) {
  if (error) {
    return console.log(error);
  } else {
    return console.log('Congrats!');
  }
});

var myPhotoLocation =
  'https://images.askmen.com/1080x540/2016/05/20-120731-what_makes_a_woman_sexy.jpg';

https.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + '/sepsi.jpg'));
});
