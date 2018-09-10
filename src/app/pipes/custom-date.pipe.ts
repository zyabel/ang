import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, locale?: any, format?: any): any {
    const date = new Date(value.seconds * 1000);
    let result;

    switch (format) {
      case 'full':
        result = date.toLocaleDateString(locale, {month: 'long', weekday: 'long', year: 'numeric', day: 'numeric'});
        break;
      case 'short':
        result = date.toLocaleDateString(locale, {month: 'short', weekday: 'short', year: 'numeric', day: 'numeric'});
        break;
      default:
        result = date.toLocaleDateString(locale);
        break;
    }
    return result;
  }

}
