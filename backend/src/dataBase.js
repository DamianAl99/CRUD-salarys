const mongoose = require('mongoose');

mongoose
        .connect('mongodb://localhost/meanSalary', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        .then(db => console.log('db is connected'))
        .catch(err => console.log(err));