package it.epicode;

public class Esercizio3 {
    public static void main(String[] args) {
        System.out.println( perimetroRettangolo(3.7,4.9));

        System.out.println(pariDispari(9));

        System.out.println(areaTriangolo(3.3,2.4,5.6));
    }

    public static double perimetroRettangolo(double a,double b) {
        double c = (a*2) + (b*2);
        return c;
    }

    public static int pariDispari(int x) {
        return x % 2 == 0 ? 0 :1;
    }

    public static double areaTriangolo(double a, double b, double c) {
        double semiPerimetro = (a + b + c)/2;
        double area = Math.sqrt(semiPerimetro * (semiPerimetro - a) * (semiPerimetro - b) * (semiPerimetro - c));
        return area;
    }
}
