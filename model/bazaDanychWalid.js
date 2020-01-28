const Miejsce = require('../model/miejsce');
const Profil = require('../model/profil');
 const Post = require('../model/post');

class bazaDanychWalid {

    static async sprawdzMiejsce(miejsceSpr) {
        // var miejsceList = Miejsce.listTytul();
        
        // for (var i = 0; i <= miejsceList; i++) {
        //     if (miejsceSpr.tytul == miejsceList[i]) {
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }

        // var liczba = parseInt(0, 10);        ; 
        // Miejsce.list().then(([result, metadata]) => {
        //         result.forEach(x => {
        //             console.log("Miejsce przekazane:");
        //             console.log(miejsceSpr.tytul);
        //             console.log("Lista:");
        //             console.log(x.tytul);

        //             if(miejsceSpr.tytul == "TEST"){
        //                 console.log("przekazany sprawdza dobrze")
        //             }else{
        //                 console.log("przekaz !!!!")
        //             }

        //             if(String(x.tytul) == "TEST"){
        //                 console.log("lista jest dobrze")
        //             }else{
        //                 console.log("lista !!!!!")
        //             }

        //             if(String(miejsceSpr.tytul) == String(x.tytul)){
        //                 console.log("UDALO SIE !!!!!"); 
        //                 console.log(liczba)                       
        //                 liczba += 1;
        //                 console.log("Dodawanie"); 
        //                 console.log(liczba)

        //                 zero += 1;
        //             console.log("Zero")
        //             console.log(zero);
        //             }else{
        //                 console.log("NIE UDALO SIE :C");
        //                 console.log(liczba)

        //             }
        //             console.log("====");
        //             console.log("Zero/liczba:")
        //             console.log(zero);
        //             console.log(liczba)
        //             console.log("====");
        //         });
        // })
        // zero = liczba;
        // console.log("Zero + LICZBA:")
        // console.log(zero);
        // console.log(liczba)
        // console.log("====");

        var odpowiedz;

        await Miejsce.list().then(([odpowiedz, metadata]) =>{
                odpowiedz.forEach(x => {
                    if (miejsceSpr.tytul == odpowiedz.tytul){
                        console.log("SUKCES")
                        console.log(odpowiedz)
                        console.log("==")
                        odpowiedz = true;
                        console.log(odpowiedz)

                    }
                });
        });
        return odpowiedz;


    }

    static sprawdzProfil(profilSprd) {
        var profilList = Profil.list();
        for (var i = 0; i <= profilList; i++) {
            if (profilSprd.loginUzytk == profilList[i].loginUzytk) {
                return true;
            }
            return false;

        }
    }

    static sprawdzPost(postSpr) {
        var postList = Post.list();
        for (var i = 0; i <= postList; i++) {
            if (postSpr.data == postList[i].imie) {
                return true;
            }
            return false;
        }
    }
}

module.exports = bazaDanychWalid;