var express=require('express');
var app=express();
app.get('/', function(req,res){
res.send({"IP address":req.headers['x-forwarded-for'],"language":req.headers['accept-language'].split(',')[0],"software":req.headers['user-agent']});
res.end();
});
var port = process.env.PORT||8080;
app.listen(8080, function(){console.log('listening on port 8080...');});
