package entities.personeEprestiti;

import jakarta.persistence.*;

import java.time.LocalDate;
@Entity
@Table(name= "Utenti")
public class Utente {
    @Id
    @GeneratedValue
    private long id;
    @Column(length = 25, nullable = false)
    private String nome;
    @Column(length = 25, nullable = false)
    private String cognome;
    @Column(nullable = false)
    private LocalDate dataDiNascita;
    private String numeroTessera;

    public Utente(String nome, String cognome, LocalDate dataDiNascita, String numeroTessera) {
        this.nome = nome;
        this.cognome = cognome;
        this.dataDiNascita = dataDiNascita;
        this.numeroTessera = numeroTessera;
    }

    // Metodi getter e setter
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public LocalDate getDataDiNascita() {
        return dataDiNascita;
    }

    public void setDataDiNascita(LocalDate dataDiNascita) {
        this.dataDiNascita = dataDiNascita;
    }

    public String getNumeroTessera() {
        return numeroTessera;
    }

    public void setNumeroTessera(String numeroTessera) {
        this.numeroTessera = numeroTessera;
    }
}
