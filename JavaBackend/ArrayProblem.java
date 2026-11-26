import java.util.*;

public class ArrayProblem {

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your size of your array");
        int sizeOfArray = sc.nextInt();
        int array [] = new int[sizeOfArray];

        for(int i=0;i<sizeOfArray;i++){
            System.out.println("Add your " + i + " number");
            array[i]= sc.nextInt();
        }
        System.out.println("Enter the searching number");
        int x= sc.nextInt();
        int count = 0;


        for(int j=0;j<sizeOfArray;j++){
            if(array[j]==x){
                count++;
                System.out.println("For this number its index is " + j);
                return;
            }
        }
        if(count==0){
            System.out.println("Your provided input is not in the data, kindly rechecks");
        }

    }
}
