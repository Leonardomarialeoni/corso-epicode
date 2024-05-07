package entities.personeEprestiti;

import entities.biblioteca.Libro;
import entities.biblioteca.Rivista;
import jakarta.persistence.*;


@MappedSuperclass

public abstract class ElementoPrestato {
    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    private boolean isPrestato;


    public boolean isPrestato() {
        return isPrestato;
    }

    public void setPrestato(boolean prestato) {
        isPrestato = prestato ;
    }

    public abstract String getTitolo();
}