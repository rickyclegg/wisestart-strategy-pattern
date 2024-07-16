import { TextFormatterStrategy } from './TextFormatterStrategy';

export class TextFormatterContext {
  private strategy: TextFormatterStrategy;

  constructor(strategy: TextFormatterStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: TextFormatterStrategy): void {
    this.strategy = strategy;
  }

  format(text: string): string {
    return this.strategy.format(text);
  }
}
