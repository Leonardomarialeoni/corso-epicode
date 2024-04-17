package Esercizio1;

public class Rettangolo {

     int altezza;
     int larghezza;

    public Rettangolo(int altezza, int larghezza){
    this.altezza = altezza;
    this.larghezza = larghezza;
    }

    public int areaRettangolo() {
        return this.altezza * this.larghezza;
    }

    public int perimetroRettangolo() {
        return (this.altezza * 2) + (this.larghezza * 2);
    }
}
