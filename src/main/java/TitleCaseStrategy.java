public class TitleCaseStrategy implements TextFormatterStrategy {
    @Override
    public String format(String text) {
        String[] words = text.split("\\s+");
        StringBuilder titleCaseText = new StringBuilder();
        for (String word : words) {
            if (word.length() > 0) {
                titleCaseText.append(Character.toUpperCase(word.charAt(0)))
                        .append(word.substring(1).toLowerCase())
                        .append(" ");
            }
        }
        return titleCaseText.toString().trim();
    }
}
