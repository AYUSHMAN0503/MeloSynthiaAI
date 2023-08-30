const express = require('express');
const router = express.Router();


router.post('/query', async (req, res) => {
  try {
    const { query } = req.body;
    console.log(query);
    /// TODO: make request to python server
    
    res.status(200).json({ message: 'Query successful', query });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;