import java.util.Scanner;

public class BigliettoMuseo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Scegli un`opzione tra 1 e 4");
        int scelta = scanner.nextInt();

        double costoBiglietto = 0;

        if (scelta == 1) {
            System.out.println("Biglietto gratuito");
        }
        else if (scelta == 2) {
            costoBiglietto = 8;
            System.out.println("Costo biglietto 8$");
        }
        else if (scelta == 3) {
            costoBiglietto = 10;
            System.out.println("Costo biglietto 10$");
        }
        else if (scelta == 4) {
            costoBiglietto = 15;
            System.out.println("Costo biglietto 15$");
        }
        else {
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
