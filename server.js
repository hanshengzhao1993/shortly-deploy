var app = require('./server-config.js');
console.log('hi');
console.log('hi again');

var port = 4568;

app.listen(port);

console.log('Server now listening on port ' + port);


git remote add live ssh://root@mydomain.com/var/repo/site.git