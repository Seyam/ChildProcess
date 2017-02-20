var express = require('express');
var process = require('child_process');
var app = express();

//app.use(express.static(__dirname+'/files'));

app.get('/', function (req, res) {
  res.end('Hello World!');
});

app.get('/ifconfig', function (req, res) {   
      

process.exec('ifconfig',function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
        res.end(stdout);
    }
});

});




app.get('/node', function (req, res) {

process.execFile('node', ['--version'], function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
        res.end(stdout);
    }
}); 
      

});


app.get('/reboot', function (req, res) {

process.exec('reboot',function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
        res.end(stdout);
    }
});
      

});



app.get('/ip', function (req, res) {

process.execFile('configure_edison', ['--showWiFiIP'], function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
        res.end(stdout);
    }
}); 
      

});



app.get('/name', function (req, res) {  



process.execFile('configure_edison', ['--showNames'], function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
        res.end(stdout);
    }
}); 
      

});


app.get('/mode', function (req, res) {  



process.execFile('configure_edison', ['--showWiFiMode'], function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
        res.end(stdout);
    }
})
      

});



app.listen(3000, function () {
  console.log('listening on port 3000!');
});