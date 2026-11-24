import java.util.*;

public class SwitchCase {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String subject = sc.nextLine();
        
        switch(subject){
            case "Mechanical": System.out.println("SOM, TOM, HT");
            break;
            case "Electrical": System.out.println("EE, SOP");
            break;
            case "Civil": System.out.println("SOM, BEM");
            break;
            default: System.out.println("Invalid Branch, Enter correct branch");
        }



    }
}
