# Build Week 2
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white)
![Static Badge](https://img.shields.io/badge/Version-1.0.0-blue)


# Clone Spotify

## DESCRIZIONE PROGETTO

Questo progetto è un fac-simile di Spotify che è stato strutturato in 3 pagine principali


### 1. Home Page

La prima è una Home Page divisa in due parti.

Nel lato sinistro abbiamo la Sidebar con all'interno la nostra libreria personalizzata.

Mentre nel lato destro abbiamo il corpo della Home page, dove sono presenti: artisti, album e tracce.

Infine abbiamo inserito un piè di pagina con le principali informazioni per l'utente.


### 2. Artist Page

La seconda pagina è quella che presenta il dettaglio dell'artista, possiamo accedervi tramite il click delle schede della Home Page.

All'interno di questa pagina possiamo trovare i vari album ed i singoli più popolari.


### 3. Album Page

Nella terza pagina troviamo l'album con le relative informazioni e l'elenco delle canzoni che lo compongono. 


## DETTAGLI PROGETTO

Inizialmente abbiamo provato ad integrare l'API proprietaria di spotify che però non ha funzionato per le troppe richieste in contemporanea.
Successivamente optando per Rapid API siamo riusciti nel nostro intento, importando Artisti, Album e Canzoni.

Il passo successivo è stato quello di creare la struttura della nostra Home Page che abbiamo popolato tramite delle funzioni in Javascript.
Dato che questa API ci faceva fare un numero limitato di chiamate abbiamo preferito costruire da 0 un JSON (config.json), nel quale abbiamo inserito i dati che volevamo utilizzare, in modo da popolare la Home, la pagina Artista e quella Album.

La Sidebar è la stessa per tutte le pagine ed è composta da due tasti: Home e Cerca, e poi da "La tua libreria" che contiene dei brani sempre da noi scelti e inseriti nel config.json, tramite un collegamento (config.json/library/albums). I brani presenti nella libreria funzionano tramite Javascript e collegati al player, che è un altro elemento che accomuna tutte le pagine.


### INSTALLAZIONE PROGETTO
Per il corretto funzionamento del progetto, nella directory principale, aprendo un terminale, va eseguito il seguente comando:
```bash
npm i
```

Questo andrà ad installare i node_modules necessari per alcune migliorie della pagina, tra cui:
- node-vibrant


## Authors

-   [@Brokins00](https://github.com/Brokins00)
-   [@GabrieleTerracciano](https://github.com/GabrieleTerracciano)
-   [@Leonardomarialeoni](https://github.com/Leonardomarialeoni)
-   [@azakanaa](https://github.com/azakanaa)
-   [@Simonecaste96](https://github.com/Simonecaste96)
