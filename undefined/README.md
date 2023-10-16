# MV
* renderMV  

# GET POST
* GET   /new        új hozzáadás
    * renderMV("new")
* POST  /new        új hozzáadás
    * getTorpeMV()
    * newTorpeMV()
* GET   /edit/:id   szerkesztés
    * getTorpeMV()
    * renderMV("edit")
* POST  /edit/:id   szerkesztés
    * editTorpeMV() ... + átirányítjuk a "/"-re
        * const torpe = loadFromDB()
             
* GET   /delete/:id törlés
    * deleteTorpeMV() -> törli a db-ből a törpöt + átirányítjuk a "/"-re
        * torpe.delete()
    * 
* POST  /delete/:id törlés
* GET   /           lista oldal
    * getAllTorpeMV() -> adatb-ből kinyeri az összes törpét + átirányítjuk a "/"-re
    * getAllTorpeMV()
    * renderMV("list")

* http://loaclhost:3000/new -> uj? "new" torpeedit
