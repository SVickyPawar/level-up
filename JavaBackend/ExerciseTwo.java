import java.util.*;

public abstract class ExerciseTwo {

    public static int greaterNum(int a, int b){
        if(a > b){
            return a;
        }else{
            return b;
        }
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println("Between "+ a +" and "+ b +", "+greaterNum(a,b) +" is greater number");

    }
}
