import java.util.*;

public class ArrayOne {
    public static void main(String[] args){
         Scanner sc= new Scanner(System.in);
         int size = sc.nextInt();

        int [] box = new int[size];

        for(int i = 0; i < size; i++){

            box[i] = sc.nextInt(); 
        }
        // marks[0]=97;
        // marks[1]=26;
        // marks[2]=65;
        // System.out.println(marks[2]);

        for(int j =0 ;j< size;j++){
            System.out.println("For this index "+ j + " this is the number " + box[j]);
        }

        

    }
}
