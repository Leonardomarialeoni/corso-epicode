package Esercizio2;

public class UsaSim {
    public static void main(String[] args) {
        SIM sim = new SIM(324641978);
        sim.setCredito(10);
        Chiamata[] Chiamata;

        Chiamata[] chiamate = new Chiamata[5];
        Chiamata c1 = new Chiamata(3565445,6);
        Chiamata c2 = new Chiamata(1267127,4);
        Chiamata c3 = new Chiamata(6745152,2);
        Chiamata c4 = new Chiamata(6127414,8);
        Chiamata c5 = new Chiamata(9857491,3);


        Chiamata[0] = c1;
        Chiamata[1] = c2;
        Chiamata[2] = c3;
        Chiamata[3] = c4;
        Chiamata[4] = c5;

        sim.setChiamata(chiamate);
    }
}
