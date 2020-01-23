
const db = require('../db/mysql');

let nextId = 1;

const miejsceExtent = [];

class Miejsce {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(tytul, szerokoscGeog, dlugoscGeog, opis, idMiejsca) {
        this.idMiejsca = idMiejsca;
        this.tytul = tytul;
        this.szerokoscGeog = szerokoscGeog;
        this.dlugoscGeog = dlugoscGeog;
        this.opis = opis;
    }

    //dodawanie obiektu do bazy
    static add(miejsce) {
        return db.execute('SELECT MAX(`idMiejsca`) a FROM `mwpDb`.`Miejsce`').then(([max, metadata]) => {
            miejsce.idMiejsca = max[0].a + 1
            db.execute(
                'insert into `mwpDb`.`Miejsce` (idMiejsca, tytul, szerokoscGeog, dlugoscGeog, opis) values (?, ?, ?, ?, ?)',
                [miejsce.idMiejsca, miejsce.tytul, miejsce.szerokoscGeog, miejsce.dlugoscGeog, miejsce.opis]
            );
        }).catch(err => {
            //błąd komunikacji z bazą danych
            console.log(err);
          });  
    }

    static list() {
        return db.execute('select * from Miejsce');
    }

    static getListFromId(id){
        return db.execute('select * from Miejsce WHERE `idMiejsca` ='+ id );
    }
    
    static edit(miejsce) {
        return  db.execute('UPDATE `mwpDb`.`Miejsce` SET `tytul` = ? , `szerokoscGeog` = ?, `dlugoscGeog` = ?, `opis` =  ? WHERE `idMiejsca` = '+ miejsce.idMiejsca,
        [miejsce.tytul, miejsce.szerokoscGeog, miejsce.dlugoscGeog, miejsce.opis]
        );    

    }

    static delete(id) {
        return db.execute('DELETE FROM `mwpDb`.`Miejsce` WHERE `idMiejsca`= ' + id);
    } 
    
    static findindex(){
        return db.execute('SELECT MAX(`idMiejsca`) a FROM `mwpDb`.`Miejsce`');
    }

    static getTable(){
        return db.execute('select * from Miejsce');
    }

}

module.exports = Miejsce;

