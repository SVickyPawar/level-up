import java.util.*;


public class Exercise {

    public static double Average(int a, int b, int c){
        return (a+b+c)/3;
    }
    
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        System.out.println("Average of my 3 numbers is "+ Average(a,b,c));

    }
}
