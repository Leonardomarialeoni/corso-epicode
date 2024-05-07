package entities.personeEprestiti;

import jakarta.persistence.*;

import java.time.LocalDate;
@Entity
@Table(name = "Prestito")
public class Prestito {
    @Id
    @GeneratedValue
    private long id;
    @Column(length = 25, nullable = false)
    private Utente utente;
    @Column(length = 25, nullable = false)
    private ElementoPrestato elemento;
    @Column(nullable = false)
    private LocalDate dataInizioPrestito;
    @Column(nullable = false)
    private LocalDate dataRestituzionePrevista;
    @Column(nullable = false)
    private LocalDate dataRestituzioneEffettiva;

    public Prestito(Utente utente, ElementoPrestato elemento, LocalDate dataInizioPrestito) {
        this.utente = utente;
        this.elemento = elemento;
        this.dataInizioPrestito = dataInizioPrestito;
        this.dataRestituzionePrevista = dataInizioPrestito.plusDays(30);
    }

    // Metodi getter e setter
    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }

    public ElementoPrestato getElemento() {
        return elemento;
    }

    public void setElemento(ElementoPrestato elemento) {
        this.elemento = elemento;
    }

    public LocalDate getDataInizioPrestito() {
        return dataInizioPrestito;
    }

    public void setDataInizioPrestito(LocalDate dataInizioPrestito) {
        this.dataInizioPrestito = dataInizioPrestito;
    }

    public LocalDate getDataRestituzionePrevista() {
        return dataRestituzionePrevista;
    }

    public void setDataRestituzionePrevista(LocalDate dataRestituzionePrevista) {
        this.dataRestituzionePrevista = dataRestituzionePrevista;
    }

    public LocalDate getDataRestituzioneEffettiva() {
        return dataRestituzioneEffettiva;
    }

    public void setDataRestituzioneEffettiva(LocalDate dataRestituzioneEffettiva) {
        this.dataRestituzioneEffettiva = dataRestituzioneEffettiva;
    }

}