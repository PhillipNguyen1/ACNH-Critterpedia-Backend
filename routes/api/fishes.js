const express = require('express');
const router = express.Router();

const Fish = require('../../models/Fish');

router.get('/', async (req, res) => {
  try {
    const fishes = await Fish.find();
    return res.json(fishes);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const fish = await Fish.findById(req.params.id);
    return res.json(fish);
  } catch (err) {
    return res.status(404).json({ success: false });
  }
});

router.post('/', async (req, res) => {
  const newFish = new Fish({
    name: req.body.name,
    northernSeasonality: req.body.northernSeasonality,
    southernSeasonality: req.body.southernSeasonality,
    activeHourBegin: req.body.activeHourBegin,
    activeHourEnd: req.body.activeHourEnd,
    location: req.body.location,
  });

  try {
    const result = await newFish.save();
    return res.json(result);
  } catch (err) {
    return res.json({ success: false });
  }
});

module.exports = router;
