package entities.biblioteca;

import entities.personeEprestiti.ElementoPrestato;
import jakarta.persistence.*;

@Entity
@Table(name = "Riviste")
public class Rivista extends ElementoPrestato implements ElementiLibriRiviste {
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
    private Periodicita periodicita;

    public Rivista(String codiceISBN, String titolo, int annoPubblicazione, int numeroPagine, Periodicita periodicita) {
        super.setPrestato(false);
        this.codiceISBN = codiceISBN;
        this.titolo = titolo;
        this.annoPubblicazione = annoPubblicazione;
        this.numeroPagine = numeroPagine;
        this.periodicita = periodicita;
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

    public Periodicita getPeriodicita() {
        return periodicita;
    }
}