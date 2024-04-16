package Esercizio;

import java.util.Scanner;

public class Esercizio3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String stringa = "";

        while (!stringa.equals(":q")){
            System.out.println("Inserire stringa");
            stringa = scanner.nextLine();

            if (!stringa.equals(":q")) {
                String[] caratteri = stringa.split("");

                for (int i = 0; i < caratteri.length; i++) {
                    System.out.print(caratteri[i]);

                    if (i < caratteri.length - 1) {
                        System.out.print(",");
                    }
                }
                System.out.println();
            }
        }
        System.out.println("Uscita dal programma");
    }
}
