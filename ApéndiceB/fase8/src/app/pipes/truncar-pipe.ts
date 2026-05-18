import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar',
  standalone: true,
})
export class TruncarPipe implements PipeTransform {
   transform(texto: string, limite: number = 120): string {
    if (texto.length <= limite) {
      return texto;
    }

    return texto.substring(0, limite) + '...';
  }
}

