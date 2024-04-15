package it.epicode;

import java.util.Scanner;

public class Esercizio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Inserisci la prima parola");
        String a = scanner.nextLine();

        System.out.println("Inserisci la seconda parola");
        String b = scanner.nextLine();

        System.out.println("Inserisci la terza parola");
        String c = scanner.nextLine();

        System.out.println(a+ ' ' + b + ' ' + c);
        System.out.println(c+ ' ' + b + ' ' + a);
    }
}
