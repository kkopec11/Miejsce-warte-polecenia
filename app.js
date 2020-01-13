const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parsuje dane typu application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

const userController = require('./controller/postController');
app.use('/posty', userController.route);

const profilController = require('./controller/profilController');
app.use('/profil', profilController.route);

const miejsceController = require('./controller/miejsceController');
app.use('/miejsce', miejsceController.route);

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});
