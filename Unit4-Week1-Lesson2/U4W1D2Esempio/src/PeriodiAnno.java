import java.util.Scanner;

public class PeriodiAnno {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Inserisci il numero del mese");
        int mese = scanner.nextInt();

        switch (mese) {
            case 9,10,11,12:
                System.out.println("Primo trimestre");
                break;
            case 1,2,3,4,5,6:
                System.out.println("Secondo pentamestre");
                break;
            case 7,8:
                System.out.println("Vacanza estiva");
                break;
            default:
                System.out.println("Scelta errata");
        }
    }
}
