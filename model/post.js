const db = require('../db/mysql');

class Post {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(tytul, ocena, opis, Profil_idProfil, Miejsce_idMiejsca, idPost) {
        this.idPost = idPost;
        this.tytul = tytul;
        this.ocena = ocena;
        this.opis = opis;
        this.Profil_idProfil = Profil_idProfil;
        this.Miejsce_idMiejsca = Miejsce_idMiejsca;
    }

    static add(post) {
        return db.execute('SELECT MAX(`idPost`) a FROM `mwpDb`.`Post`').then(([max, metadata]) => {
            post.idPost = max[0].a + 1
            db.execute(
                'insert into `mwpDb`.`Post` (idPost, tytul, ocena, opis, Profil_idProfil, Miejsce_idMiejsca) values (?, ?, ?, ?, ?, ?)',
                [post.idPost, post.tytul, post.ocena, post.opis, post.Profil_idProfil, post.Miejsce_idMiejsca]
            );
        });    
    }
    
    static list() {
        return db.execute('select * from Post');
    }

    static edit(post) {
        return  db.execute('UPDATE `mwpDb`.`Post` SET `tytul` = ? , `ocena` = ?, `opis` = ?, `Profil_idProfil` =  ? ,`Miejsce_idMiejsca` =  ? WHERE `idPost` = '+ post.idPost,
        [post.tytul, post.ocena, post.opis, post.Profil_idProfil, post.Miejsce_idMiejsca]
        );  
    }

    static getListFromId(id){
        return db.execute('select * from Post WHERE `idPost` ='+ id );
    }

    static getListFromIdEdyt(idPost){
            return db.execute('SELECT SQL_NO_CACHE post.idPost, Profil_idProfil, Miejsce_idMiejsca, post.tytul, post.ocena, post.opis FROM `mwpDb`.`Post` INNER JOIN `mwpDb`.`Profil` ON `mwpDb`.`Profil`.`idProfil` = `mwpDb`.`Post`.`Profil_idProfil` INNER JOIN `mwpDb`.`Miejsce` ON `mwpDb`.`Miejsce`.`idMiejsca` = `mwpDb`.`Post`.`Miejsce_idMiejsca` WHERE `mwpDb`.`Post`.`idPost` = ? ', [idPost]);
    }    

    static delete(id) {
    return db.execute('DELETE FROM `mwpDb`.`Post` WHERE `idPost`= ' + id);
    } 

    static findindex(){
        return db.execute('SELECT MAX(`idPost`) a FROM `mwpDb`.`Post`');
    }

    static getTable(){
        return db.execute('select * from Post');
    }
    
}

module.exports = Post;