package PlayerMultimediale;

public class Audio extends FileMultimediale{
    public Audio(String title, int duration, int volume) {
        super(title,duration,volume);
    }

    public void abbassaVolume() {
        if (volume > 0) {
            volume--;
        }
    }

    public void alzaVolume(){
        volume ++;
    }

    @Override
    public void play() {
        System.out.println("Riproduzione audio " + title);
        if (duration > 0) {
            for (int i = 0; i < duration; i++) {
                String volumeString = repeatString("!", volume);
                System.out.println(title + " " + volumeString);
            }
        } else {
            System.out.println("Riproduzione audio fallita.");
        }
    }
    private String repeatString(String str, int times) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < times; i++) {
            result.append(str);
        }
        return result.toString();
    }
    }


