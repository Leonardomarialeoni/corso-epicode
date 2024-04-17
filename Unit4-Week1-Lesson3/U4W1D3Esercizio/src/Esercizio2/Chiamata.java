package Esercizio2;

public class Chiamata {

   private int numeroChiamato;
   private int durata;

    public Chiamata( int numeroChiamato, int durata) {
        this.numeroChiamato = numeroChiamato;
        this.durata = durata;
    }

    public int getNumeroChiamato() {
        return numeroChiamato;
    }

    public int getDurata() {
        return durata;
    }

    public void setNumeroChiamato(int numeroChiamato) {
        this.numeroChiamato = numeroChiamato;
    }

    public void setDurata(int durata) {
        this.durata = durata;
    }
}
