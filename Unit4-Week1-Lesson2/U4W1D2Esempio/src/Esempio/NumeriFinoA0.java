package Esempio;

import java.util.Scanner;

public class NumeriFinoA0 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int somma = 0;
        int i = 0;
        int numero;

        do {
            System.out.println("Dammi un numero");
            numero = scanner.nextInt();
            somma = somma + numero;
            i++;
        } while (numero !=0);

        double media = (double) somma / (i - 1);

        System.out.println(media);
    }
}
