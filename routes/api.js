var express = require("express"),
    app = express(),
    http = require("http"),
    path = require('path'),
    router = express.Router(),
    port = process.env.PORT || 4000;

app.use(router);

router.get('/', function(req, res){

})
router.get('/xmltest', function(req, res){
  res.type('xml').send('<note>Hola</note>');
});
router.get('/htmltest', function(req, res){
  res.set('Content-Type','text/html').send('<html><body><h1>Que más!</h1></body></html>');
});
router.get('/jsontest', function(req, res){
  res.set('content-type','text/json').send('{ "tipo" : "archivo json"}');
});
router.get('/imgtest', function(req, res){
  res.type('jpeg').sendFile(path.join(__dirname, '../public/images/skull.jpg'));
});
router.post('/companies',function(req,res){
  res.send({type:'POST'});
});
router.put('/companies/:id', function(req, res){
  res.send({type:'PUT'});
});

/* router.post('/whatever', function (req, res, next) {
  console.log(req.body)
  res.send({
    type: 'POST',
    name: req.body.name,
    rank: req.body.rank
  });
});
*/

/*router.put('/put', function (req, res) {
  res.json(request.post);
*/

/* router.delete('/del', function (req, res) {
  res.send('Delete request to homepage');
}); */
module.exports = router;
