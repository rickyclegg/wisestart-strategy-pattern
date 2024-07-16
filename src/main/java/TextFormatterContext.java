public class TextFormatterContext {
    private TextFormatterStrategy strategy;

    public TextFormatterContext(TextFormatterStrategy strategy) {
        this.strategy = strategy;
    }

    public void setStrategy(TextFormatterStrategy strategy) {
        this.strategy = strategy;
    }

    public String format(String text) {
        return strategy.format(text);
    }
}
