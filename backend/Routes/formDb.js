const router = require('express').Router();
let Exercise = require('../model/formDb.model');
var fs = require('fs')


router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  console.log(req.body)
  
  const username = req.body.username;
  const name = req.body.name;
  const description = req.body.description;
  const age = Number(req.body.age);
  const hobbies = req.body.hobbies;
  const image = req.body.fileBuffer;
  const newExercise = new Exercise({
    username,
    name,
    description,
    hobbies,
    age,
    image
  });


  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getData').get((req, res) => {
  // res.json(Exercise)
  Exercise.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  // res.json(Exercise)
  Exercise.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addimage').post((req, res) => {
  console.log(req.files);
});



module.exports = router;