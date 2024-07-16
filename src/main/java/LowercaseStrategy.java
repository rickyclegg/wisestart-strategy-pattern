public class LowercaseStrategy implements TextFormatterStrategy {
    @Override
    public String format(String text) {
        return text.toLowerCase();
    }
}
