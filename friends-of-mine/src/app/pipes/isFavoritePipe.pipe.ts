import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFavoritePipe'
})

export class IsFavoritePipe implements PipeTransform {
  private static yes: string = 'Sim';
  private static no: string = 'Não';

  transform(value: boolean): string {
    if (!value) {
      return IsFavoritePipe.no;
    }

    return IsFavoritePipe.yes;
  }
}
