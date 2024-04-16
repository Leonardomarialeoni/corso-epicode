package Esercizio;

import java.util.Scanner;

public class Esercizio1 {
    public static void main(String[] args) {
        pariDispari();
        annoBisestile();
    }

    public static void pariDispari() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Inserire stringa");
        String parola = scanner.nextLine();

        if (parola.length() % 2 == 0) {
            System.out.println(false);
        } else {
            System.out.println(true);}
    }

    public static void annoBisestile() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Inserire anno");
        int anno = scanner.nextInt();

        if ((anno % 4 == 0 && anno % 100 != 0) || (anno % 400 == 0)) {
            System.out.println("Anno bisestile");
        } else {
            System.out.println("Anno non bisestile");
        }
    }
}
