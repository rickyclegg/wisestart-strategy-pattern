import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TextFormatterTest {

    @Test
    public void testUppercaseStrategy() {
        TextFormatterStrategy uppercaseStrategy = new UppercaseStrategy();
        assertEquals("HELLO WORLD", uppercaseStrategy.format("hello world"));
        assertEquals("JAVA PROGRAMMING", uppercaseStrategy.format("Java Programming"));
    }

    @Test
    public void testLowercaseStrategy() {
        TextFormatterStrategy lowercaseStrategy = new LowercaseStrategy();
        assertEquals("hello world", lowercaseStrategy.format("HELLO WORLD"));
        assertEquals("java programming", lowercaseStrategy.format("Java Programming"));
    }

    @Test
    public void testTitleCaseStrategy() {
        TextFormatterStrategy titleCaseStrategy = new TitleCaseStrategy();
        assertEquals("Hello World", titleCaseStrategy.format("hello world"));
        assertEquals("Java Programming", titleCaseStrategy.format("JAVA PROGRAMMING"));
    }

    @Test
    public void testTextFormatterContext() {
        TextFormatterContext context = new TextFormatterContext(new UppercaseStrategy());
        assertEquals("HELLO WORLD", context.format("hello world"));

        context.setStrategy(new LowercaseStrategy());
        assertEquals("hello world", context.format("HELLO WORLD"));

        context.setStrategy(new TitleCaseStrategy());
        assertEquals("Hello World", context.format("hello world"));
    }
}
