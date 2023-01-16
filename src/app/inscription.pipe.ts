import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inscription'
})
export class InscriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
