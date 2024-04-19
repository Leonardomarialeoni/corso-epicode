package PlayerMultimediale;

public class Video extends FileMultimediale {
    public Video(String title, int duration, int volume, int luminosita) {
        super(title, duration, volume);
        this.luminosita = luminosita;
    }

    int luminosita;


    public void abbassaLuminosita() {
        if (luminosita > 0) {
            luminosita--;
        }
    }

    public void alzaLuminosita() {
        luminosita++;
    }

    public void abbassaVolume() {
        if (volume > 0) {
            volume--;
        }
    }

    public void alzaVolume() {
        volume++;
    }

    @Override
    public void play() {
        System.out.println("Riproduzione video " + title);
        if (duration > 0) {
            for (int i = 0; i < duration; i++) {
                String volumeString = repeatString("!", volume);
                System.out.println(title + " " + volumeString);
            }
        } else {
            System.out.println("Riproduzione video fallita.");
        }

        if(luminosita > 0) {
            for (int i = 0; i < luminosita; i++) {
                String luminositaString = repeatLuce("*", luminosita);
                System.out.println("Luminosita" + " " + luminositaString);
            }
        } else {
            System.out.println("Riproduzione video fallita.");
        }
    }

    private String repeatString(String str, int times) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < times; i++) {
            result.append(str);
        }
        return result.toString();
    }

    private String repeatLuce(String str, int times) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < times; i++) {
            result.append(str);
        }
        return result.toString();
    }
}

