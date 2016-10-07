import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(text: string, numChars: string): string {

    let numberChars: number = parseFloat(numChars);
    return text.substring(0, (numberChars - 3)) + "...";

  }

}