import java.util.*;

public class ExerciseOne {

    
        public static int sumOfAllOddNumber(int n){
            int sum = 0;
            for(int i =1;i<n;i++){
                if(i%2!=0){
                    sum+=i;
                }
            }
            return sum;
        }
    
    public static void main(String[] args){


        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        System.out.println(sumOfAllOddNumber(n));
    }
}
