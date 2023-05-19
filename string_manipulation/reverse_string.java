package string_manipulation;

public class reverse_string {
    public static void main(String[] args) {
        String original = "Hello, world!";
        String reversed = new StringBuilder(original).reverse().toString();
        System.out.println(reversed); // outpout "!dlrow ,olleH".
    }
}
