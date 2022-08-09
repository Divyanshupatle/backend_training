const { json } = require('body-parser');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    //logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
router.get('/movie',function(req,res){
    let movie=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movie)
})
router.get('/movies/:indexNumber',function(req,res){
    let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let index=req.params.indexNumber
    if(index>movies.length||index<0){
        res.send("invalid index")
    }else{
    res.send(movies[index])}
})
router.get('/films',function(req,res){
    let films=[ {
        id: 1,
        name:"The Shining"
       }, {
        id: 2,
        name:"Incendies"
       }, {
        id: 3,
        name:"Rang de Basanti"
       }, {
        id: 4,
        name:"Finding Nemo"
       }]
      //let index=films.params.indexNumber
    res.send(films)
})



router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;