package entities.biblioteca;

import entities.personeEprestiti.ElementoPrestato;
import jakarta.persistence.*;


@Entity
@Table(name = "Libri")
public class Libro extends ElementoPrestato implements ElementiLibriRiviste {
    @Id
    @GeneratedValue
    private long id;
    private String codiceISBN;
    @Column(length = 25, nullable = false)
    private String titolo;
    @Column(nullable = false)
    private int annoPubblicazione;
    @Column(length = 15, nullable = false)
    private int numeroPagine;
    @Column(length = 25, nullable = false)
    private String autore;
    @Column(length = 25, nullable = false)
    private String genere;

    public Libro(String codiceISBN, String titolo, int annoPubblicazione, int numeroPagine, String autore, String genere) {
        super.setPrestato(false);
        this.codiceISBN = codiceISBN;
        this.titolo = titolo;
        this.annoPubblicazione = annoPubblicazione;
        this.numeroPagine = numeroPagine;
        this.autore = autore;
        this.genere = genere;
    }

    public String getCodiceISBN() {
        return codiceISBN;
    }

    public String getTitolo() {
        return titolo;
    }

    public int getAnnoPubblicazione() {
        return annoPubblicazione;
    }

    public int getNumeroPagine() {
        return numeroPagine;
    }

    public String getAutore() {
        return autore;
    }

    public String getGenere() {
        return genere;
    }
}