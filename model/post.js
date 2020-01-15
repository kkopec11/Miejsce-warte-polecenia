//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)
const postExtent = [];

class Post {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(tytul, ocena, opis, id) {
        this.id = id;
        this.tytul = tytul;
        this.ocena = ocena;
        this.opis = opis;
    }

    //dodawanie obiektu do bazy
    static add(post) {
        post.id = nextId++;
        postExtent.push(post);
        return post;
    }
    //pobranie listy obiektów
    //metoda nie powinna pobierać nadmiarowych danych
    //(np. przez złączenia JOIN w relacyjnej bazie danych)
    //które nie będą wyświetlane na liście
    static list() {
        return postExtent;
    }
    //edycja obiektu
    static edit(post) {
        //FIXME
    }
    //usuwanie obiektu po id
    static delete(id) {
        const index = postExtent.findIndex(x => x.id === id)
        return postExtent.splice(index,1)   
    } 
    //pobieranie obiektu do widoku szczegółów
    //może być potrzebne pobranie dodatkowych danych
    //np. przez złączenia JOIN w relacyjnej bazie danych
    static details(id) {
        //FIXME
    }
    //metoda resetuje stan bazy i dodaje rekordy testowe
    //przydatna do testów
    static initData() {
        //usuwamy zawartość tablicy
        postExtent.splice(0, postExtent.length);
        //resetujemy licznik id
        nextId = 1;
        Post.add(new Post('Daleka wyprawa', '8', 'Bla bla bla...'));
    }
}

Post.initData();

module.exports = Post;