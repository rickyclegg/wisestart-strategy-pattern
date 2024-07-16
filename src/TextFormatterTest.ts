import { TextFormatterStrategy } from './TextFormatterStrategy';
import { TextFormatterContext } from './TextFormatterContext';
import { UppercaseStrategy } from './UppercaseStrategy';
import { LowercaseStrategy } from './LowercaseStrategy';
import { TitleCaseStrategy } from './TitleCaseStrategy';

describe('TextFormatterStrategies', () => {
  test('UppercaseStrategy', () => {
    const uppercaseStrategy: TextFormatterStrategy = new UppercaseStrategy();
    expect(uppercaseStrategy.format('hello world')).toBe('HELLO WORLD');
    expect(uppercaseStrategy.format('Java Programming')).toBe('JAVA PROGRAMMING');
  });

  test('LowercaseStrategy', () => {
    const lowercaseStrategy: TextFormatterStrategy = new LowercaseStrategy();
    expect(lowercaseStrategy.format('HELLO WORLD')).toBe('hello world');
    expect(lowercaseStrategy.format('Java Programming')).toBe('java programming');
  });

  test('TitleCaseStrategy', () => {
    const titleCaseStrategy: TextFormatterStrategy = new TitleCaseStrategy();
    expect(titleCaseStrategy.format('hello world')).toBe('Hello World');
    expect(titleCaseStrategy.format('JAVA PROGRAMMING')).toBe('Java Programming');
  });

  test('TextFormatterContext', () => {
    const context = new TextFormatterContext(new UppercaseStrategy());
    expect(context.format('hello world')).toBe('HELLO WORLD');

    context.setStrategy(new LowercaseStrategy());
    expect(context.format('HELLO WORLD')).toBe('hello world');

    context.setStrategy(new TitleCaseStrategy());
    expect(context.format('hello world')).toBe('Hello World');
  });
});
