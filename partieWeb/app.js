var express = require('express');
var http = require('http'),
    request = require('request'),
    bodyParser = require('body-parser'); 
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var logFmt = require("logfmt");
var dbOperations = require("./dbOperations.js");

mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');
var nodemailer = require("nodemailer");

// Init App
var app = express();


/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "",
        pass: ""
    }
});

// View Engine



app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

//app.set('views', __dirname + '/views') ;
//les routes que j'ai ajouté

app.use('/', require('./loading'));
app.use('/loading', require('./index'));
//app.use('/nn', require('./ind'));

app.get('/send',function(req,res){
	
    var mailOptions={
		from : req.query.from,
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text+"\n"+"\n"+"Message de la part de: "+req.query.from
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});



app.get('/db/readRecords', function(req,res){
    dbOperations.getRecords(req,res);
	
});

app.get('/db/readRecords1', function(req,res){
    dbOperations.getRecords1(req,res);
});

app.get('/db/getEquipe', function(req,res){
    dbOperations.getEquipe(req,res);
});

app.get('/db/readManager', function(req,res){
    dbOperations.getManager(req,res);
});

app.get('/db/readAgent', function(req,res){
    dbOperations.getAgent(req,res);
});
app.get('/db/readManager', function(req,res){
    dbOperations.getManager(req,res);
});


app.get('/db/readNotif', function(req,res){
    dbOperations.getNotif(req,res);
});

app.get('/db/sendNotifTask', function(req,res){
    dbOperations.sendNotifTask(req,res);
});


app.get('/db/sendNotifTask1', function(req,res){
    dbOperations.sendNotifTask1(req,res);
});

app.get('/db/addRecord', function(req,res){
    dbOperations.addRecord(req,res);
});

app.get('/db/addEquipe', function(req,res){
    dbOperations.addEquipe(req,res);
});

app.get('/db/addManager', function(req,res){
    dbOperations.addManager(req,res);
});

app.get('/db/addAgent', function(req,res){
    dbOperations.addAgent(req,res);
});

app.get('/db/delRecord', function(req,res){
    dbOperations.delRecord(req,res);
});

app.get('/db/updateRecord', function(req,res){
    dbOperations.updateRecord(req,res);
});


app.get('/db/updatte', function(req,res){
    dbOperations.updatte(req,res);
});

app.get('/db/delette', function(req,res){
    dbOperations.delette(req,res);
    
});

app.get('/db/dell', function(req,res){
    dbOperations.dell(req,res);
    
});


app.get('/db/updateAgent', function(req,res){
    dbOperations.updateAgent(req,res);
});


app.get('/db/assignTask', function(req,res){
    dbOperations.assignTask(req,res);
});

app.get('/db/assignTask2', function(req,res){
    dbOperations.assignTask2(req,res);
});

app.get('/db/updateEquipe', function(req,res){
    dbOperations.updateEquipe(req,res);
});

app.get('/db/delEquipe', function(req,res){
    dbOperations.delEquipe(req,res);
});


app.get('/db/updateManager', function(req,res){
    dbOperations.updateManager(req,res);
});

app.get('/db/delAgent', function(req,res){
    dbOperations.delAgent(req,res);
});

app.get('/db/delManager', function(req,res){
    dbOperations.delManager(req,res);
});

app.get('/db/createTable', function(req,res){
    dbOperations.createTable(req,res);
});
app.get('/db/dropTable', function(req,res){
    dbOperations.dropTable(req,res);
}); 


app.get('/db/getAllSendTasks', function(req,res){
    dbOperations.getAllSendTasks(req,res);
});


app.get('/db/delOne', function(req,res){
    dbOperations.delOne(req,res);
});

app.get('/db/delTwo', function(req,res){
    dbOperations.delTwo(req,res);
});

app.get('/db/delThree', function(req,res){
    dbOperations.delThree(req,res);
});


app.get('/db/delFour', function(req,res){
    dbOperations.delFour(req,res);
});

app.get('/db/delFive', function(req,res){
    dbOperations.delFive(req,res);
});



// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


app.use('/', routes);
app.use('/users', users);
// Set Port
app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});

