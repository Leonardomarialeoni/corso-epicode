package Esempio;

import java.util.Scanner;

public class BigliettoSwitch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Scegli un`opzione tra 1 e 4");
        int scelta = scanner.nextInt();

        double costoBiglietto = 0;

        switch (scelta) {
            case 1:
                System.out.println("Biglietto gratuito");
                break;
            case 2:
                costoBiglietto = 8;
                System.out.println("Costo Biglietto 8$");
                break;
            case 3:
                costoBiglietto = 10;
                System.out.println("Costo Biglietto 10$");
                break;
            case 4:
                costoBiglietto = 15;
                System.out.println("Costo Biglietto 15$");
                break;
            default:
                System.out.println("Scelta errata");
        }

        System.out.println("Inserisci l`eta");
        int eta = scanner.nextInt();

        if (eta <= 18) {
            costoBiglietto = costoBiglietto - costoBiglietto*50/100;
        }

        System.out.println(costoBiglietto);
}
}
