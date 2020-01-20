const db = require('../db/mysql');

class Profil {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(imie, nazwisko, loginUzytk, haslo, email, opis, idProfil) {
        this.idProfil = idProfil;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.loginUzytk = loginUzytk;
        this.haslo = haslo;
        this.email = email;
        this.opis = opis;
    }

    static add(profil) {
        //wywołuje polecenie sql i zwraca promesę (Promise)
        return db.execute('SELECT MAX(`idProfil`) a FROM `mwpDb`.`Profil`').then(([max, metadata]) => {
            profil.idProfil = max[0].a + 1
            db.execute(
                'insert into `mwpDb`.`Profil` (idProfil, imie, nazwisko, loginUzytk, haslo, email, opis) values (?, ?, ?, ?, ?, ?, ?)',
                [profil.idProfil, profil.imie, profil.nazwisko, profil.loginUzytk, profil.haslo, profil.email, profil.opis]
            );
        });
    }
    
    static findindex(){
        return db.execute('SELECT MAX(`idProfil`) a FROM `mwpDb`.`Profil`');
    }

    static list() {
        return db.execute('select * from Profil');
    }

    static getListFromId(id){
        return db.execute('select * from Profil WHERE `idProfil` ='+ id );
    }

    static edit(profil) {
        return  db.execute('UPDATE `mwpDb`.`Profil` SET `imie` = ? , `nazwisko` = ?, `loginUzytk` = ?, `haslo` =  ? ,`email` =  ? ,`opis` =  ? WHERE `idProfil` = '+ profil.idProfil,
        [profil.imie, profil.nazwisko, profil.loginUzytk, profil.haslo, profil.email, profil.opis]
        );    

    }
        
    static delete(id) {
        return db.execute('DELETE FROM `mwpDb`.`Profil` WHERE `idProfil`= ' + id);
    } 

    static getTable(){
        return db.execute('select * from Profil');
    }

}

module.exports = Profil;