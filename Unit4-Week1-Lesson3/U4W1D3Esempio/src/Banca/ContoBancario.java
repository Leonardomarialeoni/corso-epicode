package Banca;

public class ContoBancario {

    private String numero;

    private int bilancio;

    public ContoBancario(String numero) {
        this.numero = numero;
    }

    public ContoBancario(String numero, int bilancio) {
        this.numero = numero;
        this.bilancio = bilancio;
    }

    public String getNumero() {
        return numero;
    }

    public int getBilancio() {
        return bilancio;
    }

    public void deposita(int ammontare) {
        bilancio = bilancio + ammontare;
    }

    public boolean prelievo(int ammontare) {
        if (ammontare <= bilancio) {
            bilancio = bilancio - ammontare;
            return true;
        } else {
            return false;
        }
    }
}
