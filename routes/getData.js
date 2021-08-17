
const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    const number = req.query.number;
    let sum = 0;
      for (i = 0; i <= number; i++){
          sum += i
      };
    if(number>0){
        res.send({
            sum 
        });
    } else if(number === null){
        res.send({
            success:'Lack of Parameter'  
        });
    } else {
        res.send({
            success:'Wrong Parameter'  
        });
    }  
    res.end();
  });


  
  module.exports = router; 

