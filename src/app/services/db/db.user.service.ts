let Datastore = require('nedb'),
    db = {},
    db.users = new Datastore('path/to/users.db');

console.log(db);