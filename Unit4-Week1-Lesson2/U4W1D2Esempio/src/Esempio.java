import java.util.Scanner;

public class Esempio {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Inserisci un prezzo");
        double prezzo = scanner.nextDouble();

        if (prezzo > 20) {
            double sconto = prezzo - (prezzo * (12 / 100));
            System.out.println("lo sconto e` del 12%");
        };
    }
}
