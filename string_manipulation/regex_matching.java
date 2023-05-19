package string_manipulation;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class regex_matching {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        String pattern = "q[a-z]+k"; // Regex pattern to match words starting with 'q' and ending with 'k'
        Pattern regexPattern = Pattern.compile(pattern); // Compile the regex pattern
        Matcher matcher = regexPattern.matcher(sentence); // Apply the pattern to the input sentence

        while (matcher.find()) { // Iterate through all the matches
            System.out.println("Found: " + matcher.group()); // Print the matched word
        }
    }
}


