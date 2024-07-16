const express = require("express");
const router = express.Router();
const {
    addPerson,
    getPeople,
    updatePerson,
    deletePerson
} = require('../controllers/people'); 

router.route('/').get(getPeople).post(addPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);
module.exports = router;
