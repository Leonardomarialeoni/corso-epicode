public class UsaPersona {

    public static void main(String[] args) {
        Persona p = new Persona("Carlo","Volta", 31, TipoLavoro.DOTTORE);

        System.out.println(p.getNome());
        System.out.println(p.getCognome());
        System.out.println(p.getEta());

        System.out.println(p.contatore);

        Persona p2 = new Persona("Riccardo","Screzio");

        System.out.println(p.getNome());
        System.out.println(p.getCognome());
        System.out.println(p.getEta());

        System.out.println(p2.contatore);

        Persona p3 = new Persona("Luca","Rigoletti");

        System.out.println(p3.contatore);

        p = null;

        p = p2;

        p.setNome("Flavia");

        System.out.println(p2.getNome());

        p2 = null;

        System.out.println(p.getNome());

        //System.out.println(p2.nome);

        p2 = p;

        System.out.println(p2.getNome());

        p2 = new Persona("Roberto","Giacometti");

        System.out.println(p2.getNome());

        System.out.println(p==p2);

        System.out.println(p.equals(p2));


    }
}
