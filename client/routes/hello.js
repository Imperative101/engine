const express = require('express'),
router = express.Router(),
hello = requre(/controllers/hello)
router.get('/', hello.hello)

router.get('/', (req,res) => {
    res.send('so')
})