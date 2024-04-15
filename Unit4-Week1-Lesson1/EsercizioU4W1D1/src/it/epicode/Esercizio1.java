package it.epicode;

import java.util.Arrays;

public class Esercizio1 {
    public static void main(String[] args) {

        System.out.println(moltiplicazione(7,3));

        concatena("ciao",10);

        String [] stringhe = inserisciInArray("sesto", new String[] {"primo","secondo","terzo","quarto","quinto"});
        System.out.println(Arrays.toString(stringhe));
    }

    public static int moltiplicazione (int a, int b) {
    int c = a * b;
    return c;
    }

    public static void concatena (String s, int a) {
        System.out.println(s+a);
    }

    public static String[] inserisciInArray (String w, String[] stringhe ) {
        String[] stringheDue = new String[6];

        for (int i = 0; i < stringhe.length +1 ; i++) {
            if(i < 2) {
                stringheDue[i] = stringhe[i];
            } else if(i == 2) {
                stringheDue[i] = w;
            } else {
                stringheDue[i] = stringhe[i - 1];
            }
        }

        return stringheDue;
    }
}
