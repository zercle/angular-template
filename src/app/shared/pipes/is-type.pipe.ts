import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isType',
    standalone: true
})
export class IsTypePipe implements PipeTransform {

  transform(value: unknown, type: unknown): boolean {
    console.log (typeof value);
    return typeof value === type;
  }

}
