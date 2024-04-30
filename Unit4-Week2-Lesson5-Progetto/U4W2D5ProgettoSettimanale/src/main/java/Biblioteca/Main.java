package Biblioteca;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Creazione di un'istanza di ArchivioBiblioteca
        ArchivioBiblioteca archivio = new ArchivioBiblioteca();

        // Aggiunta di un elemento
        Libro libro1 = new Libro("9788804668495", "Il nome della rosa", 1980, 503, "Umberto Eco", "Romanzo storico");
        Libro libro2 = new Libro("9788806222094", "La solitudine dei numeri primi", 2008, 335, "Paolo Giordano", "Romanzo");
        Libro libro3 = new Libro("9788807880748", "La ragazza di Bube", 1960, 308, "Carlo Cassola", "Romanzo");
        Libro libro4 = new Libro("9788804603473", "La storia", 1974, 318, "Elsa Morante", "Romanzo");
        Libro libro5 = new Libro("9788838920639", "Io uccido", 2002, 556, "Giorgio Faletti", "Thriller");
        archivio.aggiungiElemento(libro1);
        archivio.aggiungiElemento(libro2);
        archivio.aggiungiElemento(libro3);
        archivio.aggiungiElemento(libro4);
        archivio.aggiungiElemento(libro5);

        // Rimozione di un elemento
        archivio.rimuoviElemento("9788806222094");

        // Ricerca per ISBN
        ElementiCatalogo elemento = archivio.ricercaPerISBN("9788804603473");
        if (elemento != null) {
            System.out.println("Elemento trovato: " + elemento.getTitolo());
        } else {
            System.out.println("Elemento non trovato.");
        }

        // Ricerca per anno di pubblicazione
        List<ElementiCatalogo> libriAnno2022 = archivio.ricercaPerAnnoPubblicazione(1974);
        System.out.println("Libri pubblicati nel 1974:");
        for (ElementiCatalogo e : libriAnno2022) {
            System.out.println("- " + e.getTitolo());
        }

        // Ricerca per autore
        List<ElementiCatalogo> libriDiAutore = archivio.ricercaPerAutore("Umberto Eco");
        System.out.println("Libri dell'autore 'Umberto Eco':");
        for (ElementiCatalogo e : libriDiAutore) {
            System.out.println("- " + e.getTitolo());
        }

        // Salvataggio su disco
        archivio.salvaSuDisco("archivio.csv");

        // Caricamento da disco
        archivio.caricaDaDisco("archivio.csv");

    }
}