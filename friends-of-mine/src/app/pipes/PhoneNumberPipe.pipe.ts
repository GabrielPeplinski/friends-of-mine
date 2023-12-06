import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberPipe'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    if (value.length === 11) {
      return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
}
