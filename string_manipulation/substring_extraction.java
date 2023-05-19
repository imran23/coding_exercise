package string_manipulation;

public class substring_extraction {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        String extracted = sentence.substring(10, 15);
        System.out.println(extracted); // output "brown"
    }
}
