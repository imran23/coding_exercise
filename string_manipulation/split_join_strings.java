package string_manipulation;

public class split_join_strings {
    public static void main(String[] args) {
        String sentence = "Java is a versatile programming language";
        String[] words = sentence.split(" ");
        String joined = String.join("-", words);
        System.out.println(joined); // output "Java-is-a-versatile-programming-language"
    }

}
