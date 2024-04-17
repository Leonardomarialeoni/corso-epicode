package Banca;

public class UsaBanca {
    public static void main(String[] args) {
        ContoBancario contoBancario = new ContoBancario("345278948");

        System.out.println("Il numero del conto e`:" + contoBancario.getNumero());
        System.out.println("Il bilancio del conto e`:" + contoBancario.getBilancio());

        contoBancario.deposita(500);

        System.out.println("Il bilancio del conto e`:" + contoBancario.getBilancio());

        boolean risultatoPrelievo = contoBancario.prelievo(600);

        System.out.println("Il risultato del prelievo e`:" + risultatoPrelievo);
        System.out.println("Il bilancio del conto e`:" + contoBancario.getBilancio());

        risultatoPrelievo = contoBancario.prelievo(400);

        System.out.println("Il risultato del prelievo e`:" + risultatoPrelievo);
        System.out.println("Il bilancio del conto e`:" + contoBancario.getBilancio());
    }
}
