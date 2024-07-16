import { TextFormatterStrategy } from './TextFormatterStrategy';

export class TitleCaseStrategy implements TextFormatterStrategy {
  format(text: string): string {
    return text.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
