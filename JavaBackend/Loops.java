import java.util.*;

public class Loops {
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();


        // for(int i=1; i <= 10; i++){
        //     int num = i*n;
        //     System.out.println(num);
        // }

        int a =1;
        while(a<11){
            System.out.println(a*n);
            a++;
        }

        do{
            System.out.println(a);
            a++;
        }while(a>12); // always add termination after the do while loop
    }
}
