package PlayerMultimediale;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        System.out.println("Qui ripoduce l'audio");
        Audio audio = new Audio("ciao", 4,3);
        audio.play();
        System.out.println("Qui ripoduce il video");
        Video video = new Video("cristo", 6,3,5);
        video.play();
        System.out.println("Qui visualizza l'immagine");
        Immagine immagine = new Immagine("poster", 4);
        immagine.show();
    }
}
