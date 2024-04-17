public class Persona {

    private String nome;

    private String cognome;

    private int eta;

    private TipoLavoro tipoLavoro;

    public static int contatore;

    public Persona(String nome,String cognome, int eta, TipoLavoro tipoLavoro) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.tipoLavoro = tipoLavoro;
        this.contatore++;
    }

    public Persona(String nome, String cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.contatore++;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public int getEta() {
        return eta;
    }

    public void setEta(int eta) {
        this.eta = eta;
    }
}
