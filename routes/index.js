var express = require('express');
var router = express.Router();


const URL = 'https://api.chucknorris.io/jokes/random'
const categoryEndPoint = "https://api.chucknorris.io/jokes/categories"

// GET / JOKE
router.get('/', async (req, res) => {

  // GET categories list
  const categoryData = await fetch(categoryEndPoint);
  const categories = await categoryData.json();
  console.log(categories);

  // Get the Joke
  console.log(req.query);
  // if category selected add it to the endpoint
  let endpoint = URL
  if (req.query.category) {
    endpoint += `?category=${req.query.category}`
  }
  
  const jokeData = await fetch(endpoint)
    .then(res => res.json());

  console.log(jokeData);
  res.render('index', { categories, jokeData });
})
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
