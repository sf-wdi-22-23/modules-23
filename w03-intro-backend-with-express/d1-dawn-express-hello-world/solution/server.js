var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

var myName = 'Web Development';

var paintings = [
  { title: 'Ladies d\'Avignon', artist: 'Pabolo Picasso', imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d\'Avignon.jpg" },
  { title: 'Rothko Chapel', artist: 'Mark Rothko', imgUrl: "http://forums.ssrc.org/ndsp/wp-content/blogs.dir/23/files/2014/07/Rothko_Chapel_2.jpg" },
  { title: 'The Kiss', artist: 'Gustav Klimt', imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"}
]

app.get('/', function (req, res) {
  res.render('index', {  name: myName, paintings: paintings });
});


var taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
]

app.get('/api/taquerias', function (req, res) {

  res.json(taquerias);
});


var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Example app listening on port %s', port);
});
