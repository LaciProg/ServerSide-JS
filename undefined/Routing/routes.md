# Lol társkereső
* #### **login.html**
  * (név, jelszó, login és register gomb)
* #### **gamemodes.html**
  * táblázat (view gomb)
    * admin loginnal:
      * new gomb alul
      * edit, delete gomb soronként
  * #### **gamemodeeditnew.html**
    * gamemode edit + save + cancel
* #### **party.html** 
  * táblázat (view gomb)
  * fent (new, modify, delete) profile 
    * csak saját adtok
  * #### **partyeditnew.html**
  * party edit + save + cancel
* #### **profile.html**
  * táblázat az adatokról
  * edit alul
  * logout fent
  * #### **profileditnew.html**
    * profile edit + save + cancel

# Routing

## Middleware-ek
* ### middlewares/auth_render/
  * **renderMW.js** - renderel
  * **authMW.js** - ha nincs bejelentkezve átirányít a főoldalra
  * **checkUserLoginMW.js** - jelszó ellenőrzés, ha ok gamemodsre redirect egyébként vissza a főoldalra
  * **regUserMW.js** - regisztrál
  * **getUserByEmailMW.js** - email alapján kikeresi a usert
  * **sendPassMW.js** - jelszó küldés
* ### middlewares/gamemode/
  * **getGamemodesMW.js** - DB acces
  * **saveGamemodeMW.js** - ha nincs adat next, ha van adat ment, ha hiba lepakoja változóba és next, ha sikerült menteni átírányít /gamemodes
  * **getGamemodeMW.js** - paraméterből veszi ki az ID-t, elküldi DB-be. Ami visszajön lepakolja a res/locals-ba , ha nincs ilyen user redierct => /gamemodes
  * **delGamemodeMW.js** - töröl, átirányít
* ### middlewares/party/
  * **getPartyMW.js** - paraméterből veszi ki az ID-t, elküldi DB-be. Ami visszajön lepakolja a res/locals-ba , ha nincs ilyen user redierct => /gamemodes/:gamemodeid/party
  * **savePartyMW.js** - Ha a res/locals-on van adat azt tölti be, ha nincs adat next, ha van adat ment, ha hiba lepakoja változóba és next, ha sikerült menteni átírányít /gamemodes/:gamemodeid/party
  * **getPartiesMW.js** - DB acces
  * **delPartyMW.js** - töröl, átirányít
* ### middlewares/profile/
  * **getProfileMW.js** - paraméterből veszi ki az ID-t, elküldi DB-be. Ami visszajön lepakolja a res/locals-ba , ha nincs ilyen user redierct => /profile
  * **saveProfileMW.js** - ha nincs adat next, ha van adat ment, ha hiba lepakoja változóba és next, ha sikerült menteni átírányít /profile


## Részletek
### Login
* **GET**, **POST** => **app.use** /
  * getUserByEmailMW(*email alapján kikeresi a usert*)
  * checkUserLoginMW(*jelszó ellenőrzés, ha ok gamemodsre redirect egyébként vissza a főoldalra*)
  * renderMW(***login.html*** - elfelejtett jelszó linkkel)
* 
* * **GET**, **POST** => **app.use** /sendpass
  * getUserByEmailMW(*email alapján kikeresi a usert*)
  * sendPassMW(*jelszó küldés*) **console.log**
  * renderMW(***sendpass.html*** - elfelejtett jelszó linkkel)
*
* **GET**, **POST** => **app.use** /reg
  * regUserMW(*regisztrál, ha van postban valami*
  * renderMW(***register.html*** - elfelejtett jelszó linkkel)

### Gamemodes
* **GET** /gamemodes 
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * renderMW(***gamemodes.html***)
    * ha volt valami érték beküldve akkor az egyes form elemek azzal töltődjenek fel
    * ha nem, akkor nem
  * getGamemodesMW(*DB acces*)
* 
* **GET**, **POST** => **app.use**  /gamemodes/new
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * saveGamemodeMW(*ha nincs adat next, ha van adat ment, ha hiba lepakoja változóba és next, ha sikerült menteni átírányít /gamemodes*) 
    * if (typeof req.body.name === 'undefined'){ return next();}
      .adfjhghjlhl
      * res.redirect('/gamemodes');
    * res.locals
    * next();
  * renderMW(***gamemodeeditnew.html*** (new))
    * ha volt valami érték beküldve akkor az egyes form elemek azzal töltődjenek fel
    * ha nem, akkor nem
* 
* **GET**, **POST** => **app.use** /gamemodes/edit/:gamemodeid
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * getGamemodeMW(*paraméterből veszi ki az ID-t, elküldi DB-be. Ami visszajön lepakolja a res/locals-ba , ha nincs ilyen user redierct => /gamemodes*)
  * saveGamemodeMW(*Ha a res/locals-on van adat azt tölti be*,  *ha nincs adat next, ha van adat ment, ha hiba lepakoja változóba és next, ha sikerült menteni átírányít /gamemodes*) 
    * if (typeof req.body.name === 'undefined'){ return next();}
      .adfjhghjlhl
      * res.redirect('/gamemodes');
    * res.locals
    * next();
  * renderMW(***gamemodeeditnew.html*** (edit))
    * ha volt valami érték beküldve akkor az egyes form elemek azzal töltődjenek fel
    * ha nem, akkor nem
* 
* **GET** /gamemodes/del/:gamemodeid
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * getGamemodeMW(*paraméterből veszi ki az ID-t, elküldi DB-be. Ami visszajön lepakolja a res/locals-ba , ha nincs ilyen user redierct => /gamemodes*){
    * db("...", function(result)){
      * if(result.length === 0){
        * return res.redirect('/gamemodes');
      * }
      * res.loacls.gamemode = result[0]
      * next();
    * }
  * }
  * delGamemodeMW(*töröl, átirányít*){
    * res.loacls.gamemode.delete();
    * res.redirect('/gamemodes');
  * }
### Party
* **GET** /gamemodes/:gamemodeid/party
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * renderMW(***party.html***)
    * ha volt valami érték beküldve akkor az egyes form elemek azzal töltődjenek fel
    * ha nem, akkor nem
  * getPartiesMW(*DB acces*)
  
* 
* **GET**, **POST** => **app.use** /gamemodes/:gamemodeid/party/new
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * savePartyMW(*ha nincs adat next, ha van adat ment, ha hiba lepakoja változóba és next, ha sikerült menteni átírányít /gamemodes/:gamemodeid/party*) 
    * if (typeof req.body.name === 'undefined'){ return next();}
      .adfjhghjlhl
      * res.redierct('/gamemodes/:gamemodeid/party');
    * res.locals
    * next();
  * renderMW(***partyeditnew.html*** (new))
    * ha volt valami érték beküldve akkor az egyes form elemek azzal töltődjenek fel
    * ha nem, akkor nem

*  
* **GET**, **POST** => **app.use** /gamemodes/:gamemodeid/party/edit/:partyid
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * getPartyMW(*paraméterből veszi ki az ID-t, elküldi DB-be. Ami visszajön lepakolja a res/locals-ba , ha nincs ilyen user redierct => /gamemodes/:gamemodeid/party*)
  * savePartyMW(*Ha a res/locals-on van adat azt tölti be*,  *ha nincs adat next, ha van adat ment, ha hiba lepakoja változóba és next, ha sikerült menteni átírányít /gamemodes/:gamemodeid/party*) 
    * if (typeof req.body.name === 'undefined'){ return next();}
      .adfjhghjlhl
      * res.redirect('/gamemodes/:gamemodeid/party');
    * res.locals
    * next();
  * renderMW(***partyeditnew.html*** (edit))
    * ha volt valami érték beküldve akkor az egyes form elemek azzal töltődjenek fel
    * ha nem, akkor nem
*
* **GET** /gamemodes/:gamemodeid/party/del/:partyid
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * getPartyMW(*paraméterből veszi ki az ID-t, elküldi DB-be. Ami visszajön lepakolja a res/locals-ba , ha nincs ilyen user redierct => /gamemodes/:gamemodeid/party*)
  * delPartyMW(*töröl, átirányít*){
    * res.loacls.party.delete();
    * res.redirect('/gamemodes/:gamemodeid/party');
  * }
### Profile
* **GET** /profile/:profileid
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * renderMW(***profile.html***)
    * ha volt valami érték beküldve akkor az egyes form elemek azzal töltődjenek fel
    * ha nem, akkor nem
  * getProfileMW(*DB acces*)
*
* **GET**, **POST** => **app.use** /profile/new
  * renderMW(***profileditnew.html*** (new))
    * ha volt valami érték beküldve akkor az egyes form elemek azzal töltődjenek fel
    * ha nem, akkor nem
  * saveProfileMW(*ha nincs adat next, ha van adat ment, ha hiba lepakoja változóba és next, ha sikerült menteni átírányít /profile*) 
    * if (typeof req.body.name === 'undefined'){ return next();}
      .adfjhghjlhl
      * res.redirect('/profile/:profileid');
    * res.locals
    * next();
* 
* **GET**, **POST** => **app.use** /profile/edit/:profileid
  * authMW(*bejelentkezve - next egyébként redirect - /?hiba=loginpls*)
  * getProfileMW(*paraméterből veszi ki az ID-t, elküldi DB-be. Ami visszajön lepakolja a res/locals-ba , ha nincs ilyen user redierct => /profile*)
  * renderMW(***profileditnew.html*** (edit))
    * ha volt valami érték beküldve akkor az egyes form elemek azzal töltődjenek fel
    * ha nem, akkor nem
  * saveProfileMW(*Ha a res/locals-on van adat azt tölti be*,  *ha nincs adat next, ha van adat ment, ha hiba lepakoja változóba és next, ha sikerült menteni átírányít /profile*) 
    * if (typeof req.body.name === 'undefined'){ return next();}
      .adfjhghjlhl
      * res.redirect('/gamemodes/:gamemodeid/party');
    * res.locals
    * next();

* reg-gel bővítés 