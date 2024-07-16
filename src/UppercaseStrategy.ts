import { TextFormatterStrategy } from './TextFormatterStrategy';

export class UppercaseStrategy implements TextFormatterStrategy {
  format(text: string): string {
    return text.toUpperCase();
  }
}
