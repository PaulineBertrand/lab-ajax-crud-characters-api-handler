const router = require('express').Router()
const Character = require('../models/Character.model')
/**
 * !All the routes here are prefixed with /api/characters
 */

/**
 * ? This route should respond with all the characters
 */
router.get('/', async (req, res, next) => {
  try {
    const allCharacters = await Character.find()
    res.status(200).json(allCharacters)
  } catch (err) {
    next(err)
  }
})

/**
 * ? This route should create one character and respond with 
 * ? the created character
 */

router.get('/:id([a-z0-9]{24})', async (req, res, next) => {
  // the regex in the url makes sure that we only get into this route 
  // if the string after the slash is a Mongo id
  try {
    const character = await Character.findById(req.params.id)
    res.status(200).json(character)
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  /**Your code goes here */
})

/**
 * ? This route should respond with one character
 */
router.get('/:name', async (req, res, next) => {
  try {
    const character = await Character.find({name: new RegExp(req.params.name, 'i')})
    res.status(200).json(character)
  } catch (err) {
    next(err)
  }
})

/**
 * ? This route should update a character and respond with
 * ? the updated character
 */
router.patch('/:id', (req, res, next) => {
  /**Your code goes here */
})

/**
 * ? Should delete a character and respond with a success or
 * ? error message
 */
router.delete('/:id', (req, res, next) => {
  /**Your code goes here */
})


module.exports = router