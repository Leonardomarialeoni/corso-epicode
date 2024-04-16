package Esempio;

public class NumeriDispari {
    public static void main(String[] args) {
        // stampaNumeriDispariWhile();
        // stampaNumeriDispariFor();
        stampaNumeriDispariDoWhile();
    }

    public static void stampaNumeriDispariWhile(){
        int i = 3;

        while (i <= 21) {
            if (i % 2 != 0){
                System.out.println(i);
            }
            i++;
        }
        /* while (i <= 21) {
                System.out.println(i);
                i = i+2;
            }
            */
    }

    public static void stampaNumeriDispariFor() {
        for (int i = 3; i <= 21; i++) {
            if (i % 2 !=0 ){
            System.out.println(i);}
        }
    }

    public static void stampaNumeriDispariDoWhile() {
        int i =3;

        do {
            if (i % 2 != 0)
                System.out.println(i);
            i++;
        } while (i <= 21);
    }

}
