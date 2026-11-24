import java.util.*;

public class Conditionals {
    public void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        if(a==b){
            System.out.println("A is equal to B");
        }else if(a > b){
            System.out.println("A is greater than B");
        }else{
            System.out.println("A is less than B");
        }

        // int isEven = num%2;

        // if(isEven != 0){
        //     System.out.println("Odd");
        // }else{
        //     System.out.println("Even");
        // }
    }
}
