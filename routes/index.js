var express = require('express');
var router = express.Router();
require('dotenv').config()
const axios = require('axios')
const apiKey =process.env.SPOON_API_KEY

router.get(`/`, function(req, res, next) {
  const search = req.query.query
  console.log(search);
  axios.get('https://api.spoonacular.com/recipes/complexSearch',{
    headers: {
      'X-Api-Key': `${apiKey}`,
      'Content-Type': 'application/json'
    },
    params: {
      query: search,
      maxFat: 25,
      number: 50
    },
    
  })
  .then(response => {
    const foodItems = response.data.results
    // res.json(response.data)

    const nutrients = foodItems[0].nutrition.nutrients
    console.log(foodItems, nutrients);
    res.render('index',{foodItems,nutrients});
})
});


module.exports = router;
