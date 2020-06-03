require('dotenv').config()

const express = require('express');
var router = express.Router();
const app = express();
// app.use(express.static('public'));
//does this go here?
const cors = require('cors');
app.use(cors());



router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/hnow', function(req, res){
  res.render('hnow', {
    title: 'Help now'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

module.exports = router;





app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pet Box';

app.get('/', (request, response) => {
  response.send('Oh hey Pet Box');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

//most routes are gets, no post or patch yet until log
//shelters, counselors, financial resources, food, legal, calming ?

//mock data
app.locals.shelters = [];

app.locals.shelters = [
  { id: 'a1', name: 'Rover', type: 'dog' },
  { id: 'b2', name: 'Marcus Aurelius', type: 'parakeet' },
  { id: 'c3', name: 'Craisins', type: 'cat' }
  //{test data haha}
];

app.get('/', (request, response) => {
  // response is actually handled by static asset express middleware
  app.use(express.static('public'));
});

//get request
app.get('/api/v1/shelters', (request, response) => {
  const shelters = app.locals.shelters;

  response.json({ shelters });
});

app.get('/api/v1/shelters/:id', (request, response) => {
  const { id } = request.params;
  //iterates through the shelters data but its singular - like a ruby enumerable w/ pipes
  const shelter = app.locals.shelters.find(shelter => shelter.id === id);
  if (!shelter) {
    return response.sendStatus(404);
  }
  response.status(200).json(shelter);
});
