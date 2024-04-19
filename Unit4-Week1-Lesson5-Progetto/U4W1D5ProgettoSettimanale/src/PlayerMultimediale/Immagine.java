package PlayerMultimediale;

public class Immagine {

   private static String title;
   private static int luminosita;

    public Immagine(String title,int luminosita){
        this.title = title;
        this.luminosita = luminosita;
    }

    public void abbassaLuminosita() {
        if (luminosita > 0) {
            luminosita--;
        }
    }

    public void alzaLuminosita() {
        luminosita++;
    }

    public void show(){
        System.out.println("Visualizza " + title + " " + repeatLuce("*", luminosita));
    }

    private String repeatLuce(String str, int times) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < times; i++) {
            result.append(str);
        }
        return result.toString();
    }
}
