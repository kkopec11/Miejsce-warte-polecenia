
CREATE SCHEMA IF NOT EXISTS `mwpDb` ;


-- Table: Miejsce
CREATE TABLE IF NOT EXISTS `mwpDb`.`Miejsce` (
    `idMiejsca` INT  NOT NULL,
    `tytul` varchar(40)  NOT NULL,
    `szerokoscGeog` varchar(40)  NOT NULL,
    `dlugoscGeog` varchar(40)  NOT NULL,
    `opis` varchar (1000)  NOT NULL,
    CONSTRAINT `PK_Miejsce` PRIMARY KEY  (`idMiejsca` ASC)
);

-- Table: Profil
CREATE TABLE IF NOT EXISTS `mwpDb`.`Profil` (
    `idProfil` int  NOT NULL,
    `imie` varchar(20)  NOT NULL,
    `nazwisko` varchar(20)  NOT NULL,
    `loginUzytk` varchar(20)  NOT NULL,
    `haslo` varchar(20)  NOT NULL,
    `email` varchar(30)  NOT NULL,
    `opis` varchar(1000)  NOT NULL,
    CONSTRAINT `PK_Profil` PRIMARY KEY  (`idProfil` ASC)
);

-- Table: Post
CREATE TABLE IF NOT EXISTS `mwpDb`.`Post` (
    `idPost` INT NOT NULL,
    `tytul` varchar(40)  NOT NULL,
    `ocena` int  NOT NULL,
    `opis` varchar (1000)  NOT NULL,
    `Profil_idProfil` int  NOT NULL,
    `Miejsce_idMiejsca` int  NOT NULL,
    CONSTRAINT `PK_Post` PRIMARY KEY  (`idPost` ASC),
    CONSTRAINT `FK_Profil` FOREIGN KEY (`Profil_idProfil`)  REFERENCES Profil(`idProfil`),
    CONSTRAINT `FK_Miejsce` FOREIGN KEY (`Miejsce_idMiejsca`)  REFERENCES Miejsce(`idMiejsca`)

);

INSERT IGNORE INTO `mwpDb`.`Miejsce` (`idMiejsca`, `tytul`, `szerokoscGeog`, `dlugoscGeog`, `opis`) VALUES 
    (1, 'Dubrownik','42°38′53″N', '18°05′31″E', 'Miasto w Chorwacji, stolica żupanii dubrownicko-neretwiańskiej, siedziba Miasta Dubrownik. Jest położone w południowej Dalmacji nad Morzem Adriatyckim. Niegdyś ośrodek handlu rangi europejskiej, obecnie przede wszystkim ośrodek turystyki. Port handlowy i pasażerski.'),
    (2, 'Statua Wolności','40°42′51″N', '-74°00′21″W', 'Posąg na wyspie Liberty Island u ujścia rzeki Hudson do Oceanu Atlantyckiego w regionie metropolitalnym Nowego Jorku, nieoficjalny symbol wolności, Nowego Jorku i Stanów'),
    (3, 'Palac Kultury i Nauki',' 52°13′47″N', '21°00′42″E', 'najwyższy budynek w Polsce, znajdujący się w śródmieściu Warszawy na placu Defilad 1. Właścicielem gmachu jest miasto stołeczne Warszawa. Pałac jest siedzibą Rady m.st. Warszawy, która obraduje w Sali Warszawskiej. Zarządza nim miejska spółka Zarząd Pałacu Kultury i Nauki Sp. z o.o. '),
    (4, 'Varadero','39°54′26″N', '116°23′50″E', 'Miasto na Kubie, w prowincji Matanzas, położone na półwyspie Hicacos, jeden z największych kurortów na Karaibach. W 2005 roku ludność Varadero wynosiła 25 734 mieszkańców')
;

INSERT IGNORE INTO `mwpDb`.`Post` (`idPost`, `tytul`, `ocena`, `opis`, `Profil_idProfil`, `Miejsce_idMiejsca`) VALUES 
    (1, 'Daleka wyprawa', '8', 'Bla bla bla...', '1', '2'),
    (2, 'Krótka podróż', '3', 'Bla bla bla...', '2', '1'),
    (3, 'Ciekawa wycieczka', '6', 'Bla bla bla...', '3', '4')  
;

INSERT IGNORE INTO `mwpDb`.`Profil` (`idProfil`, `imie`, `nazwisko`, `loginUzytk`, `haslo`, `email`, `opis`) VALUES 
    (1, 'Jan', 'Nowak', 'janek', 'maslo', 'email@gmail.com', 'Bla bla bla bla...'),
    (2, 'Anna', 'Kowalska', 'anna', 'anna123', 'email@gmail.com', 'Bla bla bla bla...'),
    (3, 'Adam', 'Kowal', 'adam', 'kowal', 'email@gmail.com', 'Bla bla bla bla...')

;

