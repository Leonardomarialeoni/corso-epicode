import dao.LibroDAO;
import dao.PrestitoDAO;
import dao.UtenteDAO;
import entities.personeEprestiti.Prestito;
import entities.personeEprestiti.Utente;
import entities.biblioteca.Libro;
import entities.biblioteca.Periodicita;
import entities.biblioteca.Rivista;

import java.time.LocalDate;
import java.util.List;


public class Applicazione {
    public static void main(String[] args) {
        LibroDAO libroDAO = new LibroDAO();
        UtenteDAO utenteDAO = new UtenteDAO();
        PrestitoDAO prestitoDAO = new PrestitoDAO();

        Utente utente1 = new Utente("Mario", "Rossi", LocalDate.of(1990, 5, 15), "001");
        Utente utente2 = new Utente("Anna", "Verdi", LocalDate.of(1985, 8, 20), "002");
        Utente utente3 = new Utente("Luigi", "Bianchi", LocalDate.of(1978, 3, 10), "003");


        Libro libro1 = new Libro("978-8804628273", "Il Signore degli Anelli", 1954, 1200, "J.R.R. Tolkien", "Fantasy");
        libro1.setPrestato(false);
        Libro libro2 = new Libro("978-8804638340", "1984", 1949, 328, "George Orwell", "Distopia");
        libro2.setPrestato(false);
        Libro libro3 = new Libro("978-8804689977", "Harry Potter e la Pietra Filosofale", 1997, 336, "J.K. Rowling", "Fantasy");
        libro3.setPrestato(true);

        Rivista rivista1 = new Rivista("978-0007891234", "National Geographic", 1888, 100, Periodicita.MENSILE);
        rivista1.setPrestato(true);
        Rivista rivista2 = new Rivista("978-0012345678", "Time", 1923, 60, Periodicita.SETTIMANALE);
        rivista2.setPrestato(false);
        Rivista rivista3 = new Rivista("978-0023456789", "Vogue", 1892, 80, Periodicita.MENSILE);
        rivista3.setPrestato(true);

        // Esempio: Rimozione di un elemento dal catalogo dato un codice ISBN
        String isbnDaRimuovere = "978-8804638340";
        libroDAO.rimuoviLibroPerISBN(isbnDaRimuovere);

        // Esempio: Ricerca di libri per titolo o parte di esso
        String titoloCercato = "Java";
        List<Libro> libriPerTitolo = libroDAO.trovaLibriPerTitolo(titoloCercato);
        if (libriPerTitolo != null && libriPerTitolo.size() > 0) {
            System.out.println("Libri trovati per il titolo contenente '" + titoloCercato + "':");
            for (Libro libro : libriPerTitolo) {
                System.out.println(libro.getTitolo());
            }
        } else {
            System.out.println("Nessun libro trovato per il titolo contenente: " + titoloCercato);
        }

        // Esempio: Ricerca degli elementi attualmente in prestito dato un numero tessera utente
        int numeroTesseraUtente = 003;
        List<Prestito> prestitiUtente = prestitoDAO.trovaPrestitiPerNumeroTessera(numeroTesseraUtente);
        if (prestitiUtente != null && prestitiUtente.size() > 0) {
            System.out.println("Elementi attualmente in prestito per l'utente con numero tessera " + numeroTesseraUtente + ":");
            for (Prestito prestito : prestitiUtente) {
                System.out.println("Elemento: " + prestito.getElemento().getTitolo());
            }
        } else {
            System.out.println("Nessun elemento in prestito per l'utente con numero tessera: " + numeroTesseraUtente);
        }

        // Esempio: Ricerca di tutti i prestiti scaduti e non ancora restituiti
        List<Prestito> prestitiScaduti = prestitoDAO.trovaPrestitiScadutiERestituitiNonEffettuati();
        if (prestitiScaduti != null && prestitiScaduti.size() > 0) {
            System.out.println("Prestiti scaduti e non ancora restituiti:");
            for (Prestito prestito : prestitiScaduti) {
                System.out.println("Elemento: " + prestito.getElemento().getTitolo() + ", Data di restituzione prevista: " + prestito.getDataRestituzionePrevista());
            }
        } else {
            System.out.println("Nessun prestito scaduto e non ancora restituito trovato.");
        }
    }
}