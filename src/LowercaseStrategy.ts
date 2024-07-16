import { TextFormatterStrategy } from './TextFormatterStrategy';

export class LowercaseStrategy implements TextFormatterStrategy {
  format(text: string): string {
    return text.toLowerCase();
  }
}
