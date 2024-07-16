public class UppercaseStrategy implements TextFormatterStrategy {
    @Override
    public String format(String text) {
        return text.toUpperCase();
    }
}
