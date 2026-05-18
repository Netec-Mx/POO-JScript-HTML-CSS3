import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform( texto: string, limite: number = 100 ): string {

    if (!texto) {
      return '';
    }

    if (texto.length <= limite) {
      return texto;
    }

    return texto.substring(0, limite) + '...';

  }

}