package Esercizio2;

import java.util.Arrays;

public class SIM {

   private int numero;
   private double credito;
   private  Chiamata[] chiamate;

    public SIM(int numero) {
        this.numero = numero;
    }

    public int getNumero() {
        return numero;
    }

    public double getCredito() {
        return credito;
    }

    public Chiamata[] getChiamata() {
        return chiamate;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public void setCredito(double credito) {
        this.credito = credito;
    }

    public void setChiamata(Chiamata[] chiamate) {
        this.chiamate = chiamate;
    }

    public void stampDatiSim(){
        System.out.println("Il numero di telefono: " + chiamate);
        System.out.println("Il credito residuo : " + credito);

        for (int i = 0; i < chiamate.length; i++) {
            System.out.println("Il numero chiamato: " chiamate[i].getNumeroChiamato() + ", durata" + chiamate[i].getDurata());
        }
    }
}
