const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parsuje dane typu application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

// kontrolery
const userController = require('./controller/postController');
app.use('/posty', userController.route);

const profilController = require('./controller/profilController');
app.use('/profil', profilController.route);

const miejsceController = require('./controller/miejsceController');
app.use('/miejsce', miejsceController.route);

// podlaczenie do bazy

const db = require('./db/mysql');
let dbSchemaScript = fs.readFileSync(path.join(__dirname, '/db/schema.sql')).toString();
console.log(`Attempt to run schema.sql...`);
console.log(dbSchemaScript);
db.query(dbSchemaScript)
  .then( () => {
    //test pobierania danych z bazy
    //przykład sekwencjonowania wywołań asynchronicznych -
    //zwrócona promesa będzie obsłużowna w następnym bloku then()
    return db.execute('select * from profil');
  })
  .then(([Profil, metadata]) => {
    console.log(Profil);
  })
  .catch(err => {
    console.log(err);
  })
;

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});