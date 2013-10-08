var connect = require('connect');
var passport = require('passport');

var express = require('express');
var app = express();

//var app = connect() .use(connect.logger('dev')) .use(connect.static('public')) .use(function(req, res){ res.end('hello world\n'); }) .listen(3000);

//dump(app);

app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }));

function dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }

    console.log(out);

    // or, if you wanted to avoid alerts...

    var pre = document.createElement('pre');
    pre.innerHTML = out;
    document.body.appendChild(pre)
}
