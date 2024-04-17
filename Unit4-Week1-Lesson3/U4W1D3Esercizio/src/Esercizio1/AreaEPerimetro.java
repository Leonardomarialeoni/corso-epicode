package Esercizio1;

public class AreaEPerimetro {

    public static void main(String[] args) {
    Rettangolo r1 = new Rettangolo(6,4);
    Rettangolo r2 = new Rettangolo(7,5);

    stampaRettangolo(r1);
    stampaRettangolo(r2);
    stampaDueRettangoli(r1,r2);

    }

    public static void stampaRettangolo(Rettangolo rettangolo) {
        System.out.println("Area rettangolo " + rettangolo.areaRettangolo());
        System.out.println("Perimetro rettangolo " + rettangolo.perimetroRettangolo());
    }

    public static void stampaDueRettangoli(Rettangolo rettangolo1, Rettangolo rettangolo2) {
        int areaR1 = rettangolo1.areaRettangolo();
        int areaR2 = rettangolo2.areaRettangolo();
        int sommaAree = areaR1 + areaR2;

        int perimetro1 = rettangolo1.perimetroRettangolo();
        int perimetro2 = rettangolo2.perimetroRettangolo();
        int sommaPerimetri = perimetro1 + perimetro2;

        System.out.println("La somma delle aree e` " + sommaAree);
        System.out.println("La somma dei perimetri e` " + sommaPerimetri);
    }
}
