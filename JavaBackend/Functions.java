import java.util.*;

public class Functions{

    // public static int sumOfTwoNumbers(int num1,int num2){

    //     int sum = num1+num2;
    //     return sum;

    // }

    public static int multiple(int num1, int num2){
        int mult = num1*num2;
        return mult;
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

       int val= multiple(num1, num2);
       System.out.println("Multiple of 2 numbers is "+val);
    }
}